#!/usr/bin/env python3
"""
Fine-tuning script for Gemma 4 E4B → Maia.

Uses QLoRA (4-bit quantization + LoRA adapters) to make CPU/low-VRAM training feasible.

Run:
  python3 finetune_maia.py
"""
import os
import json
import torch
from pathlib import Path
from datasets import Dataset
from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    TrainingArguments,
    Trainer,
    DataCollatorForLanguageModeling,
)
from peft import LoraConfig, get_peft_model, TaskType, prepare_model_for_kbit_training

# ============ CONFIG ============
BASE_MODEL = "google/gemma-4-E4B-it"  # Gemma 4 E4B instruction-tuned (4B effective params, multimodal edge, 128K ctx)
DATASET_PATH = Path("/home/user/Maia/finetuning/output/maia_gemma4_finetune.jsonl")
OUTPUT_DIR = Path("/home/user/Maia/finetuning/output_model/maia-lora-adapter")
FINAL_MODEL_DIR = Path("/home/user/Maia/finetuning/output_model/maia-final")
MAX_LENGTH = 1024
BATCH_SIZE = 1
GRAD_ACCUM = 8
EPOCHS = 1
LR = 2e-4

# ============ DATASET ============
def load_dataset():
    """Load JSONL dataset and apply Gemma chat template."""
    examples = []
    if not DATASET_PATH.exists():
        # Reassemble from parts
        parts = sorted(DATASET_PATH.parent.glob("maia_gemma4_finetune.jsonl.part_*"))
        if parts:
            with DATASET_PATH.open("wb") as out:
                for p in parts:
                    out.write(p.read_bytes())
    with DATASET_PATH.open("r", encoding="utf-8") as f:
        for line in f:
            try:
                ex = json.loads(line)
                if "messages" in ex and len(ex["messages"]) >= 2:
                    examples.append({"messages": ex["messages"]})
            except Exception:
                continue
    return Dataset.from_list(examples)


def format_for_gemma(example, tokenizer):
    """Apply Gemma chat template."""
    text = tokenizer.apply_chat_template(
        example["messages"],
        tokenize=False,
        add_generation_prompt=False,
    )
    tokens = tokenizer(
        text,
        truncation=True,
        max_length=MAX_LENGTH,
        padding="max_length",
        return_tensors=None,
    )
    tokens["labels"] = tokens["input_ids"].copy()
    return tokens


# ============ MODEL ============
def load_model():
    """Load Gemma in 4-bit and prepare for QLoRA."""
    from transformers import BitsAndBytesConfig

    bnb_config = BitsAndBytesConfig(
        load_in_4bit=True,
        bnb_4bit_quant_type="nf4",
        bnb_4bit_compute_dtype=torch.float16,
        bnb_4bit_use_double_quant=True,
    )

    tokenizer = AutoTokenizer.from_pretrained(BASE_MODEL, trust_remote_code=True)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    model = AutoModelForCausalLM.from_pretrained(
        BASE_MODEL,
        quantization_config=bnb_config,
        device_map="auto",
        trust_remote_code=True,
    )
    model = prepare_model_for_kbit_training(model)

    lora_config = LoraConfig(
        task_type=TaskType.CAUSAL_LM,
        r=16,
        lora_alpha=32,
        lora_dropout=0.05,
        bias="none",
        target_modules=["q_proj", "k_proj", "v_proj", "o_proj",
                        "gate_proj", "up_proj", "down_proj"],
    )
    model = get_peft_model(model, lora_config)
    model.print_trainable_parameters()
    return model, tokenizer


# ============ TRAIN ============
def main():
    print(">> Loading dataset...")
    raw = load_dataset()
    print(f"   {len(raw)} examples")

    print(">> Loading model (this downloads Gemma 4 E4B - several GB)...")
    model, tokenizer = load_model()

    print(">> Tokenizing...")
    tokenized = raw.map(
        lambda ex: format_for_gemma(ex, tokenizer),
        remove_columns=raw.column_names,
        num_proc=4,
    )

    args = TrainingArguments(
        output_dir=str(OUTPUT_DIR),
        per_device_train_batch_size=BATCH_SIZE,
        gradient_accumulation_steps=GRAD_ACCUM,
        num_train_epochs=EPOCHS,
        learning_rate=LR,
        logging_steps=10,
        save_steps=500,
        save_total_limit=2,
        warmup_ratio=0.03,
        lr_scheduler_type="cosine",
        bf16=False,
        fp16=True,
        optim="paged_adamw_8bit",
        gradient_checkpointing=True,
        report_to="none",
    )

    trainer = Trainer(
        model=model,
        args=args,
        train_dataset=tokenized,
        data_collator=DataCollatorForLanguageModeling(tokenizer, mlm=False),
    )

    print(">> Starting fine-tuning...")
    trainer.train()

    print(">> Saving LoRA adapter...")
    trainer.save_model(str(OUTPUT_DIR))
    tokenizer.save_pretrained(str(OUTPUT_DIR))

    print(">> Merging LoRA into base model (final Maia)...")
    merged = model.merge_and_unload()
    merged.save_pretrained(str(FINAL_MODEL_DIR), safe_serialization=True)
    tokenizer.save_pretrained(str(FINAL_MODEL_DIR))

    print(f">> DONE: Maia model at {FINAL_MODEL_DIR}")

if __name__ == "__main__":
    main()
