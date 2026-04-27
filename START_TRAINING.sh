#!/bin/bash
# MAIA 2026 - AUTOMATED EXECUTION SCRIPT
# This script will guide you through Colab execution

set -e

NOTEBOOK="/home/user/Maia/finetuning/colab/maia_final_multistage_2026.ipynb"
HF_TOKEN="${HF_TOKEN:-}"

echo "╔════════════════════════════════════════════════════════════╗"
echo "║ MAIA 2026 FINAL - AUTOMATED TRAINING EXECUTION             ║"
echo "╚════════════════════════════════════════════════════════════╝"

echo ""
echo "STEP 1: PREREQUISITES CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -z "$HF_TOKEN" ]; then
    echo "❌ HF_TOKEN not set"
    echo "   Run: export HF_TOKEN='hf_xxxxx...'"
    exit 1
fi
echo "✓ HF_TOKEN available"

if [ ! -f "$NOTEBOOK" ]; then
    echo "❌ Notebook not found: $NOTEBOOK"
    exit 1
fi
echo "✓ Notebook ready: $NOTEBOOK"

echo ""
echo "STEP 2: COLAB SETUP INSTRUCTIONS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Accept Gemma 4 License (REQUIRED):"
echo "   → https://huggingface.co/google/gemma-4-E4B-it"
echo "   → Click 'Acknowledge'"
echo ""
echo "2. Upload Notebook to Colab:"
echo "   → https://colab.research.google.com/upload"
echo "   → Upload: $NOTEBOOK"
echo ""
echo "3. Configure Colab:"
echo "   → Left sidebar: 'Secrets' (key icon)"
echo "   → Add secret named: HF_TOKEN"
echo "   → Value: $HF_TOKEN"
echo "   → (Or set in first cell)"
echo ""
echo "4. Set Runtime to T4 GPU (Free):"
echo "   → Runtime → Change runtime type"
echo "   → Select: T4 GPU"
echo ""
echo "5. Execute Training:"
echo "   → Runtime → Run All"
echo "   → OR click play button on first cell and go down"
echo ""
echo "STEP 3: TRAINING WILL:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✓ Stage 0: Setup (5min)"
echo "  ✓ Stage 1-5: Prepare data (30min)"
echo "  ✓ Stage 6: SFT Training (10-12h)"
echo "  ✓ Stage 7: Save SFT + Push to HF"
echo "  ✓ Stage 8-9: DPO Training (4-6h)"
echo "  ✓ Stage 10: Save DPO + Push to HF"
echo "  ✓ Stage 11: GGUF Conversion"
echo "  ✓ Stage 12: Test Inference"
echo "  ✓ Stage 13: Summary"
echo ""
echo "TOTAL TIME: ~16-20 hours"
echo "COST: $0 (Google Colab Free)"
echo ""
echo "STEP 4: AFTER TRAINING"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Models will be at:"
echo "  → https://huggingface.co/{USERNAME}/maia-gemma4-e4b-2026-sft"
echo "  → https://huggingface.co/{USERNAME}/maia-gemma4-e4b-2026-dpo"
echo "  → https://huggingface.co/{USERNAME}/maia-gemma4-e4b-2026-dpo-GGUF"
echo ""
echo "Use:"
echo "  $ ollama pull {USERNAME}/maia-gemma4-e4b-2026-dpo-GGUF"
echo "  $ ollama run maia"
echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║  READY TO CREATE MAIA 2026 LLM                             ║"
echo "║  Follow steps 1-5 above to start training                  ║"
echo "╚════════════════════════════════════════════════════════════╝"
