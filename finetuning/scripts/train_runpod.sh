#!/bin/bash
# Maia Fine-tuning Pipeline (Gemma 4 E4B → Maia)
# Run on a GPU machine (Colab/RunPod/Modal/Lambda).
# Requires: 24GB+ VRAM (RTX 4090 / A100). With QLoRA, 16GB also works.
set -euo pipefail

cd "$(dirname "$0")/.."
DIR="$(pwd)"

echo ">> [1/5] Reassembling dataset..."
cat output/maia_gemma4_finetune.jsonl.part_* > output/maia_gemma4_finetune.jsonl
wc -l output/maia_gemma4_finetune.jsonl

echo ">> [2/5] Installing GPU stack..."
pip install -q -U "transformers>=5.0" "peft>=0.13" "accelerate>=1.0" \
    "bitsandbytes>=0.45" "datasets>=4.0" "trl>=0.12" "huggingface_hub" \
    "sentencepiece" "protobuf"

echo ">> [3/5] Logging into HuggingFace (needed for Gemma gated repos)..."
echo "Run: huggingface-cli login    (with a HF token that accepted Gemma 4 license)"
huggingface-cli whoami || { echo "Login first."; exit 1; }

echo ">> [4/5] Fine-tuning Gemma 4 E4B → Maia (QLoRA)..."
python3 scripts/finetune_maia.py

echo ">> [5/5] Converting to GGUF (for Ollama / llama.cpp)..."
python3 scripts/convert_to_gguf.py

echo ">> Maia model ready at: output_model/maia-final/ (HF) and output_model/maia.gguf"
