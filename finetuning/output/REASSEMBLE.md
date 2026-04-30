# Reassemble Final Dataset

The full dataset was split into 3 parts due to GitHub's 100MB per-file limit.

## To reassemble (run in this directory):
```bash
cat maia_gemma4_finetune.jsonl.part_* > maia_gemma4_finetune.jsonl
```

## Then merge with knowledge expansion:
```bash
cat maia_gemma4_finetune.jsonl maia_knowledge_2025_2026.jsonl > maia_combined_training.jsonl
```

## Stats (verified)
- Part 00: 38,767 examples (90 MB)
- Part 01: 58,157 examples (90 MB)
- Part 02: 36,940 examples (38 MB)
- **Total base: 133,864 examples (218 MB)**
- Knowledge expansion: 8+ examples
- **Total combined: ~133,872+ examples**
- Format: Gemma chat messages (JSONL)
- Target model: unsloth/gemma-4-E4B-it (google/gemma-4-E4B-it)
- Output LLM: calitosaa/Maia
