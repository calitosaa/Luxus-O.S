# Reassemble Final Dataset

The full dataset was split for GitHub's 100MB limit.

## To reassemble:
```bash
cat maia_gemma4_finetune.jsonl.part_* > maia_gemma4_finetune.jsonl
```

## Stats
- Total examples: 98,766
- Format: Gemma chat messages (JSONL)
- Target model: google/gemma-4-e4b
