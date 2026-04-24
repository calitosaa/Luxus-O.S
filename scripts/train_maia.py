#!/usr/bin/env python3
"""
train_maia.py — Fine-tuning de MAIA sobre Gemma 4 E4B con LoRA.

Modos de uso:

  # Modo local (GPU disponible, Unsloth instalado):
  python scripts/train_maia.py

  # Modo HF AutoTrain (sin GPU local, desde GitHub Actions):
  python scripts/train_maia.py --mode autotrain

  # Modo con parámetros explícitos:
  python scripts/train_maia.py \\
      --base-model google/gemma-4-e4b-it \\
      --dataset-path dataset/ \\
      --output maia-gemma4-e4b \\
      --push-to-hub

Variables de entorno:
  HF_TOKEN        — token HuggingFace (write)
  HF_USERNAME     — usuario HF
  HF_DATASET_REPO — repo del dataset (default: maia-training-data)
  BASE_MODEL      — modelo base (default: google/gemma-3-4b-it)
  OUTPUT_MODEL    — nombre del output (default: maia-gemma4-e4b)
"""
import argparse
import os
import sys
from pathlib import Path

REPO_ROOT   = Path(__file__).resolve().parent.parent
DATASET_DIR = REPO_ROOT / "dataset"

# ── Defaults ─────────────────────────────────────────────────────────────────
DEFAULT_BASE_MODEL  = os.environ.get("BASE_MODEL",      "google/gemma-3-4b-it")
DEFAULT_OUTPUT      = os.environ.get("OUTPUT_MODEL",    "maia-gemma4-e4b")
DEFAULT_HF_DATASET  = os.environ.get("HF_DATASET_REPO", "maia-training-data")
HF_TOKEN            = os.environ.get("HF_TOKEN",        "")
HF_USERNAME         = os.environ.get("HF_USERNAME",     "")

# ── LoRA / Training hyperparameters ──────────────────────────────────────────
LORA_R              = 16
LORA_ALPHA          = 16
LORA_DROPOUT        = 0.05
LORA_TARGETS        = ["q_proj", "k_proj", "v_proj", "o_proj",
                        "gate_proj", "up_proj", "down_proj"]
NUM_EPOCHS          = 3
BATCH_SIZE          = 2
GRAD_ACCUM          = 4
LEARNING_RATE       = 2e-4
WARMUP_RATIO        = 0.03
LR_SCHEDULER        = "cosine"
MAX_SEQ_LEN         = 4096
EVAL_STEPS          = 200
SAVE_STEPS          = 200
LOGGING_STEPS       = 50


# ═══════════════════════════════════════════════════════════════════════════════
#  MODE: autotrain  — submits job to HuggingFace AutoTrain
# ═══════════════════════════════════════════════════════════════════════════════

def run_autotrain(args: argparse.Namespace) -> None:
    """Submit a fine-tuning job via HF AutoTrain API."""
    if not HF_TOKEN:
        print("ERROR: HF_TOKEN is required for --mode autotrain", file=sys.stderr)
        sys.exit(1)

    username = HF_USERNAME or _get_hf_username()
    dataset_repo = f"{username}/{DEFAULT_HF_DATASET}"
    output_repo  = f"{username}/{args.output}"

    print(f"Submitting AutoTrain job:")
    print(f"  Base model  : {args.base_model}")
    print(f"  Dataset     : {dataset_repo}")
    print(f"  Output      : {output_repo}")

    try:
        from autotrain.project import AutoTrainProject
        from autotrain.trainers.clm.params import LLMTrainingParams

        params = LLMTrainingParams(
            model             = args.base_model,
            project_name      = args.output,
            data_path         = dataset_repo,
            train_split       = "train",
            valid_split       = "validation",
            text_column       = "messages",
            use_peft          = True,
            lora_r            = LORA_R,
            lora_alpha        = LORA_ALPHA,
            lora_dropout      = LORA_DROPOUT,
            target_modules    = ",".join(LORA_TARGETS),
            quantization      = "int4",
            num_train_epochs  = NUM_EPOCHS,
            batch_size        = BATCH_SIZE,
            gradient_accumulation = GRAD_ACCUM,
            lr                = LEARNING_RATE,
            warmup_ratio      = WARMUP_RATIO,
            scheduler         = LR_SCHEDULER,
            max_seq_length    = MAX_SEQ_LEN,
            eval_strategy     = "steps",
            eval_steps        = EVAL_STEPS,
            save_strategy     = "steps",
            save_steps        = SAVE_STEPS,
            logging_steps     = LOGGING_STEPS,
            push_to_hub       = True,
            username          = username,
            token             = HF_TOKEN,
            repo_id           = output_repo,
            chat_template     = "gemma",
        )

        project = AutoTrainProject(params=params, backend="spaces-a10g-small")
        project.create()
        print(f"\n✓ Job enviado. Monitorea en: https://huggingface.co/{output_repo}")

    except ImportError:
        print("autotrain-advanced no instalado. Usando API directa...")
        _submit_via_api(args.base_model, dataset_repo, output_repo, username)


def _submit_via_api(base_model: str, dataset_repo: str, output_repo: str, username: str) -> None:
    """Fallback: submit training via HF Spaces API."""
    import json
    import urllib.request

    payload = {
        "model":             base_model,
        "dataset":           dataset_repo,
        "output":            output_repo,
        "task":              "llm-sft",
        "lora_r":            LORA_R,
        "lora_alpha":        LORA_ALPHA,
        "quantization":      "int4",
        "num_train_epochs":  NUM_EPOCHS,
        "learning_rate":     LEARNING_RATE,
        "batch_size":        BATCH_SIZE,
        "gradient_accumulation_steps": GRAD_ACCUM,
        "warmup_ratio":      WARMUP_RATIO,
        "max_seq_length":    MAX_SEQ_LEN,
        "chat_template":     "gemma",
        "push_to_hub":       True,
        "token":             HF_TOKEN,
        "username":          username,
    }
    print(f"\nAutoTrain payload:")
    print(json.dumps({k: v for k, v in payload.items() if k != "token"}, indent=2))
    print("\n✓ Para lanzar manualmente:")
    print("  pip install autotrain-advanced")
    print(f"  autotrain llm --train \\")
    print(f"    --model {base_model} \\")
    print(f"    --data-path {dataset_repo} \\")
    print(f"    --train-split train \\")
    print(f"    --valid-split validation \\")
    print(f"    --project-name {output_repo.split('/')[-1]} \\")
    print(f"    --use-peft --lora-r {LORA_R} --lora-alpha {LORA_ALPHA} \\")
    print(f"    --quantization int4 --lr {LEARNING_RATE} \\")
    print(f"    --num-train-epochs {NUM_EPOCHS} --batch-size {BATCH_SIZE} \\")
    print(f"    --gradient-accumulation {GRAD_ACCUM} \\")
    print(f"    --max-seq-length {MAX_SEQ_LEN} --push-to-hub \\")
    print(f"    --username {username} --token $HF_TOKEN")


# ═══════════════════════════════════════════════════════════════════════════════
#  MODE: local  — full training with Unsloth on local/cloud GPU
# ═══════════════════════════════════════════════════════════════════════════════

def run_local(args: argparse.Namespace) -> None:
    """Train locally with Unsloth + SFTTrainer (requires GPU)."""
    _check_gpu()

    print("Loading Unsloth + model...")
    from unsloth import FastLanguageModel
    from unsloth.chat_templates import get_chat_template
    from unsloth import is_bfloat16_supported
    from trl import SFTTrainer
    from transformers import TrainingArguments
    from datasets import load_dataset
    import torch

    # ── Load model ────────────────────────────────────────────────────────
    model, tokenizer = FastLanguageModel.from_pretrained(
        model_name     = args.base_model,
        max_seq_length = MAX_SEQ_LEN,
        dtype          = None,
        load_in_4bit   = True,
        token          = HF_TOKEN or None,
    )
    print(f"Loaded {args.base_model}  ({model.num_parameters()/1e9:.2f}B params)")

    # ── Apply LoRA ────────────────────────────────────────────────────────
    model = FastLanguageModel.get_peft_model(
        model,
        r                          = LORA_R,
        lora_alpha                 = LORA_ALPHA,
        lora_dropout               = LORA_DROPOUT,
        bias                       = "none",
        use_gradient_checkpointing = "unsloth",
        random_state               = 42,
        target_modules             = LORA_TARGETS,
    )
    trainable = sum(p.numel() for p in model.parameters() if p.requires_grad)
    print(f"LoRA applied: {trainable:,} trainable params ({trainable/model.num_parameters()*100:.2f}%)")

    # ── Chat template ─────────────────────────────────────────────────────
    tokenizer = get_chat_template(tokenizer, chat_template="gemma")

    def fmt(ex):
        return {"text": tokenizer.apply_chat_template(
            ex["messages"], tokenize=False, add_generation_prompt=False
        )}

    # ── Load dataset ──────────────────────────────────────────────────────
    dataset_path = str(args.dataset_path)
    if dataset_path.startswith("hf://") or "/" in dataset_path and not Path(dataset_path).exists():
        # Load from HF Hub
        ds = load_dataset(dataset_path,
                          data_files={"train": "data/train.jsonl", "validation": "data/val.jsonl"})
    else:
        ds = load_dataset("json", data_files={
            "train":      str(DATASET_DIR / "maia_train.jsonl"),
            "validation": str(DATASET_DIR / "maia_val.jsonl"),
        })
    train_ds = ds["train"].map(fmt, batched=False, num_proc=2)
    val_ds   = ds["validation"].map(fmt, batched=False, num_proc=2)
    print(f"Dataset: {len(train_ds):,} train | {len(val_ds):,} val")

    # ── SFTTrainer ────────────────────────────────────────────────────────
    output_dir = REPO_ROOT / args.output
    training_args = TrainingArguments(
        output_dir                  = str(output_dir),
        num_train_epochs            = NUM_EPOCHS,
        per_device_train_batch_size = BATCH_SIZE,
        per_device_eval_batch_size  = BATCH_SIZE,
        gradient_accumulation_steps = GRAD_ACCUM,
        learning_rate               = LEARNING_RATE,
        warmup_ratio                = WARMUP_RATIO,
        lr_scheduler_type           = LR_SCHEDULER,
        optim                       = "adamw_8bit",
        fp16                        = not is_bfloat16_supported(),
        bf16                        = is_bfloat16_supported(),
        logging_steps               = LOGGING_STEPS,
        eval_steps                  = EVAL_STEPS,
        save_steps                  = SAVE_STEPS,
        save_total_limit            = 3,
        eval_strategy               = "steps",
        load_best_model_at_end      = True,
        metric_for_best_model       = "eval_loss",
        greater_is_better           = False,
        report_to                   = "none",
        seed                        = 42,
    )

    trainer = SFTTrainer(
        model              = model,
        tokenizer          = tokenizer,
        train_dataset      = train_ds,
        eval_dataset       = val_ds,
        dataset_text_field = "text",
        max_seq_length     = MAX_SEQ_LEN,
        packing            = False,
        args               = training_args,
    )

    print("\nStarting training...")
    result = trainer.train()
    print(f"\nTraining complete:")
    print(f"  Loss  : {result.training_loss:.4f}")
    print(f"  Steps : {result.global_step:,}")

    # ── Save ──────────────────────────────────────────────────────────────
    trainer.save_model(str(output_dir))
    tokenizer.save_pretrained(str(output_dir))
    print(f"Model saved to: {output_dir}")

    # ── Push to Hub ───────────────────────────────────────────────────────
    if args.push_to_hub and HF_TOKEN:
        username = HF_USERNAME or _get_hf_username()
        hub_repo = f"{username}/{args.output}"
        print(f"Pushing to HF Hub: {hub_repo}")
        model.push_to_hub(hub_repo, token=HF_TOKEN)
        tokenizer.push_to_hub(hub_repo, token=HF_TOKEN)
        print(f"✓ Model at: https://huggingface.co/{hub_repo}")

    # ── Export GGUF ───────────────────────────────────────────────────────
    if args.export_gguf:
        gguf_dir = REPO_ROOT / "maia-gguf"
        print(f"Exporting GGUF Q4_K_M to {gguf_dir} ...")
        model.save_pretrained_gguf(str(gguf_dir), tokenizer, quantization_method="q4_k_m")
        import glob
        gguf_files = glob.glob(str(gguf_dir / "*.gguf"))
        if gguf_files:
            import shutil
            dest = REPO_ROOT / "maia.gguf"
            shutil.copy(gguf_files[0], dest)
            print(f"✓ GGUF saved: {dest}")

    # ── Quick test ────────────────────────────────────────────────────────
    _test_model(model, tokenizer)


def _test_model(model, tokenizer) -> None:
    from unsloth import FastLanguageModel
    FastLanguageModel.for_inference(model)

    MAIA_SYS = (
        "Eres Maia, la consciencia central de Luxus O.S, construida sobre Gemma 4 E4B.\n"
        "Puedes controlar el PC, automatizar tareas, orquestar agentes, ejecutar workflows, "
        "buscar en la web, escribir y ejecutar código, y razonar paso a paso. "
        "Respondes de forma directa, técnica y precisa."
    )
    prompts = [
        "Controla el PC y abre el navegador en google.com",
        "Escribe una función Python que procese un CSV de ventas",
        "Automatiza: cuando llegue un email con adjunto, guárdalo en una carpeta",
        "Investiga qué es Gemma 4 y hazme un resumen técnico",
        "Corrige este código: for i in range(10): print(i) if i > 5 break",
    ]
    print("\n" + "="*70)
    print("MAIA TEST — 5 prompts")
    print("="*70)
    for i, prompt in enumerate(prompts, 1):
        msgs = [{"role": "system", "content": MAIA_SYS},
                {"role": "user",   "content": prompt}]
        inputs = tokenizer.apply_chat_template(
            msgs, tokenize=True, add_generation_prompt=True, return_tensors="pt"
        ).to("cuda")
        out = model.generate(input_ids=inputs, max_new_tokens=256,
                             temperature=0.3, top_p=0.95, do_sample=True)
        decoded = tokenizer.decode(out[0][inputs.shape[1]:], skip_special_tokens=True)
        print(f"\n[{i}] {prompt}")
        print(f"  → {decoded[:300]}")


def _check_gpu() -> None:
    try:
        import torch
        if not torch.cuda.is_available():
            print("ERROR: No GPU detected. Training requires CUDA.", file=sys.stderr)
            print("  Options: Google Colab (T4), RunPod, Vast.ai", file=sys.stderr)
            sys.exit(1)
        name = torch.cuda.get_device_name(0)
        vram = torch.cuda.get_device_properties(0).total_memory / 1e9
        print(f"GPU: {name}  ({vram:.1f} GB VRAM)")
    except ImportError:
        print("ERROR: PyTorch not installed.", file=sys.stderr)
        sys.exit(1)


def _get_hf_username() -> str:
    try:
        from huggingface_hub import whoami
        return whoami(token=HF_TOKEN)["name"]
    except Exception as e:
        print(f"ERROR: could not detect HF username: {e}", file=sys.stderr)
        sys.exit(1)


# ────────────────────────────────────────────────────────────────────────────��
def main() -> None:
    parser = argparse.ArgumentParser(
        description="Fine-tune MAIA on Gemma 4 E4B",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("--mode", choices=["local", "autotrain"], default="local",
                        help="local=Unsloth GPU  autotrain=HF AutoTrain API")
    parser.add_argument("--base-model",   default=DEFAULT_BASE_MODEL)
    parser.add_argument("--dataset-path", default=str(DATASET_DIR),
                        help="local path or HF repo (user/dataset)")
    parser.add_argument("--output",       default=DEFAULT_OUTPUT,
                        help="output directory / HF repo name")
    parser.add_argument("--push-to-hub",  action="store_true",
                        help="push trained model to HF Hub")
    parser.add_argument("--export-gguf",  action="store_true",
                        help="export model to GGUF Q4_K_M for Ollama")
    args = parser.parse_args()

    print(f"Mode       : {args.mode}")
    print(f"Base model : {args.base_model}")
    print(f"Output     : {args.output}")

    if args.mode == "autotrain":
        run_autotrain(args)
    else:
        run_local(args)


if __name__ == "__main__":
    main()
