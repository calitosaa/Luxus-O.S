#!/usr/bin/env python3
"""MAIA 2026 - Final Training Executor (SFT + DPO).

Run inside the MAIA Colab notebook. Two phases:

  Phase 1 SFT:
    Model: google/gemma-2-4b
    QLoRA: 4-bit + LoRA r=16
    LR: 2e-4, batch=4, epochs=1, seq=2048
    Duration: ~10-12h on T4
    Data: /content/data/sft.jsonl  (133,864 rows)

  Phase 2 DPO:
    Input: SFT checkpoint
    LR: 5e-5, beta=0.1, epochs=1
    Duration: ~4-6h on T4
    Data: /content/data/dpo_pairs.jsonl  (550+ high-quality pairs)

Final upload: Maia-AI/maia-2026-gemma2-4b-sft-dpo
"""
from __future__ import annotations
import os, json, gc, time
from pathlib import Path

import torch
from datasets import load_dataset
from transformers import (
    AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig, TrainingArguments,
)
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training, PeftModel
from trl import SFTTrainer, DPOTrainer, DPOConfig
from huggingface_hub import HfApi, login

# ---------------- Config ----------------
BASE_MODEL = "google/gemma-2-4b"
HF_REPO = os.environ.get("HF_REPO", "Maia-AI/maia-2026-gemma2-4b-sft-dpo")
HF_TOKEN = os.environ.get("HF_TOKEN", "")

DRIVE = Path("/content/drive/MyDrive/MAIA_2026")
SFT_OUT = DRIVE / "checkpoints" / "sft"
DPO_OUT = DRIVE / "checkpoints" / "dpo"
LOGS = DRIVE / "logs"

SFT_DATA = "/content/data/sft.jsonl"
DPO_DATA = "/content/data/dpo_pairs.jsonl"

for p in (SFT_OUT, DPO_OUT, LOGS):
    p.mkdir(parents=True, exist_ok=True)

bnb_cfg = BitsAndBytesConfig(
    load_in_4bit=True, bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.float16, bnb_4bit_use_double_quant=True,
)
lora_cfg = LoraConfig(
    r=16, lora_alpha=32, lora_dropout=0.05, bias="none",
    task_type="CAUSAL_LM",
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj",
                    "gate_proj", "up_proj", "down_proj"],
)

if HF_TOKEN:
    login(token=HF_TOKEN)


def format_sft(example):
    instr = example.get("instruction", "")
    inp = example.get("input", "")
    out = example.get("output", "")
    if inp:
        text = f"<start_of_turn>user\n{instr}\n\n{inp}<end_of_turn>\n<start_of_turn>model\n{out}<end_of_turn>"
    else:
        text = f"<start_of_turn>user\n{instr}<end_of_turn>\n<start_of_turn>model\n{out}<end_of_turn>"
    return {"text": text}


# ---------------- Phase 1: SFT ----------------
def run_sft():
    print("=" * 70 + "\n[Phase 1] SFT starting\n" + "=" * 70)
    tok = AutoTokenizer.from_pretrained(BASE_MODEL, token=HF_TOKEN)
    tok.pad_token = tok.eos_token
    tok.padding_side = "right"

    model = AutoModelForCausalLM.from_pretrained(
        BASE_MODEL, quantization_config=bnb_cfg,
        device_map="auto", token=HF_TOKEN, attn_implementation="eager",
    )
    model = prepare_model_for_kbit_training(model)
    model = get_peft_model(model, lora_cfg)
    model.print_trainable_parameters()

    ds = load_dataset("json", data_files=SFT_DATA, split="train")
    ds = ds.map(format_sft, remove_columns=ds.column_names)

    args = TrainingArguments(
        output_dir=str(SFT_OUT),
        num_train_epochs=1,
        per_device_train_batch_size=4,
        gradient_accumulation_steps=4,
        gradient_checkpointing=True,
        optim="paged_adamw_8bit",
        learning_rate=2e-4, lr_scheduler_type="cosine", warmup_ratio=0.03,
        logging_steps=50, save_steps=500, save_total_limit=3,
        fp16=True, max_grad_norm=0.3, weight_decay=0.001,
        report_to=["tensorboard"], logging_dir=str(LOGS / "sft"),
        push_to_hub=False, max_steps=-1, seed=42,
    )

    trainer = SFTTrainer(
        model=model, train_dataset=ds, tokenizer=tok,
        args=args, dataset_text_field="text",
        max_seq_length=2048, packing=False,
    )
    trainer.train()
    trainer.save_model(str(SFT_OUT))
    tok.save_pretrained(str(SFT_OUT))
    print(f"[Phase 1] SFT done -> {SFT_OUT}")
    del trainer, model
    gc.collect(); torch.cuda.empty_cache()


# ---------------- Phase 2: DPO ----------------
def run_dpo():
    print("=" * 70 + "\n[Phase 2] DPO starting\n" + "=" * 70)
    tok = AutoTokenizer.from_pretrained(str(SFT_OUT))
    tok.pad_token = tok.eos_token

    base = AutoModelForCausalLM.from_pretrained(
        BASE_MODEL, quantization_config=bnb_cfg,
        device_map="auto", token=HF_TOKEN, attn_implementation="eager",
    )
    base = prepare_model_for_kbit_training(base)
    model = PeftModel.from_pretrained(base, str(SFT_OUT), is_trainable=True)

    ds = load_dataset("json", data_files=DPO_DATA, split="train")

    def fmt(ex):
        return {
            "prompt": ex["prompt"],
            "chosen": ex["chosen"],
            "rejected": ex["rejected"],
        }
    ds = ds.map(fmt)

    cfg = DPOConfig(
        output_dir=str(DPO_OUT),
        num_train_epochs=1,
        per_device_train_batch_size=2,
        gradient_accumulation_steps=8,
        gradient_checkpointing=True,
        optim="paged_adamw_8bit",
        learning_rate=5e-5, lr_scheduler_type="cosine", warmup_ratio=0.05,
        logging_steps=20, save_steps=200, save_total_limit=2,
        fp16=True, max_grad_norm=0.3, weight_decay=0.001,
        beta=0.1, max_length=2048, max_prompt_length=1024,
        report_to=["tensorboard"], logging_dir=str(LOGS / "dpo"),
        push_to_hub=False, seed=42,
    )

    trainer = DPOTrainer(
        model=model, ref_model=None, args=cfg,
        train_dataset=ds, tokenizer=tok, peft_config=lora_cfg,
    )
    trainer.train()
    trainer.save_model(str(DPO_OUT))
    tok.save_pretrained(str(DPO_OUT))
    print(f"[Phase 2] DPO done -> {DPO_OUT}")
    del trainer, model, base
    gc.collect(); torch.cuda.empty_cache()


# ---------------- Push to HF Hub ----------------
def push_hub():
    print("=" * 70 + "\n[Upload] HF Hub\n" + "=" * 70)
    api = HfApi(token=HF_TOKEN)
    api.create_repo(HF_REPO, exist_ok=True, private=False)
    api.upload_folder(
        folder_path=str(DPO_OUT), repo_id=HF_REPO, repo_type="model",
        commit_message="MAIA 2026 final DPO checkpoint",
    )
    card = """---
language:
- es
- en
license: gemma
tags:
- gemma4
- fine-tune
- agents
- maia-2026
- spanish
- qlora
- dpo
base_model: google/gemma-2-4b
---

# MAIA 2026 (Gemma 2 4B fine-tune)

Spanish-first agentic LLM, fine-tuned from `google/gemma-2-4b` on:

- **SFT**: 133,864 rows (skills + agents + reasoning + logic + workflows + instructions)
- **DPO**: 550+ preference pairs across coding / reasoning / safety / writing

Pipeline: QLoRA 4-bit, r=16, LR 2e-4 (SFT) + 5e-5 (DPO), beta=0.1, 1 epoch each.

Includes 49 specialized agents and an index over 44,724 skills (Gemma4 Skills OS).
"""
    (DPO_OUT / "README.md").write_text(card)
    api.upload_file(
        path_or_fileobj=str(DPO_OUT / "README.md"),
        path_in_repo="README.md",
        repo_id=HF_REPO, repo_type="model",
        commit_message="Model card",
    )
    print(f"[Upload] -> https://huggingface.co/{HF_REPO}")


def main():
    t0 = time.time()
    run_sft()
    run_dpo()
    if HF_TOKEN:
        push_hub()
    print(f"DONE in {(time.time()-t0)/3600:.2f}h")


if __name__ == "__main__":
    main()
