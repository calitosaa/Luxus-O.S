#!/usr/bin/env python3
"""Combine all datasets into final training file."""
import json
from pathlib import Path

FT_DIR = Path("/home/user/Maia/finetuning")
OUTPUT = FT_DIR / "output" / "maia_gemma4_finetune.jsonl"
SUMMARY = FT_DIR / "output" / "dataset_summary.json"

SOURCES = [
    FT_DIR / "agents_data" / "agents_dataset.jsonl",
    FT_DIR / "skills_data" / "skills_dataset.jsonl",
    FT_DIR / "workflow_examples" / "workflows_dataset.jsonl",
    FT_DIR / "logic_examples" / "logic_dataset.jsonl",
    FT_DIR / "instructions" / "training_prompts_dataset.jsonl",
    FT_DIR / "reasoning_patterns" / "reasoning_dataset.jsonl",
    FT_DIR / "identity_data" / "maia_identity.jsonl",   # identidad de Maia
]

def to_gemma_format(ex):
    """Convert to Gemma chat format. Handles both alpaca and messages formats."""
    if "messages" in ex:
        return {
            "messages": ex["messages"],
            "metadata": {"category": ex.get("category", "general"), "source": ex.get("source", "messages")}
        }
    user_msg = ex["instruction"]
    if ex.get("input"):
        user_msg += "\n\n" + ex["input"]
    return {
        "messages": [
            {"role": "user", "content": user_msg},
            {"role": "assistant", "content": ex["output"]}
        ],
        "metadata": {
            "category": ex.get("category", "general"),
            "source": ex.get("agent") or ex.get("source") or ex.get("workflow_path") or ex.get("logic_path") or "unknown"
        }
    }

def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    total = 0
    by_category = {}

    with OUTPUT.open("w", encoding='utf-8') as out:
        for src in SOURCES:
            if not src.exists():
                print(f"  SKIP: {src.name} (not found)")
                continue
            count = 0
            with src.open("r", encoding='utf-8') as f:
                for line in f:
                    try:
                        ex = json.loads(line)
                        formatted = to_gemma_format(ex)
                        out.write(json.dumps(formatted, ensure_ascii=False) + "\n")
                        cat = formatted["metadata"]["category"]
                        by_category[cat] = by_category.get(cat, 0) + 1
                        count += 1
                        total += 1
                    except Exception:
                        continue
            print(f"  {src.name}: {count} examples")

    summary = {
        "total_examples": total,
        "by_category": dict(sorted(by_category.items(), key=lambda x: -x[1])),
        "output_file": str(OUTPUT),
        "format": "gemma_chat_messages",
        "model_target": "unsloth/gemma-4-E4B-it",
        "output_llm": "calitosaa/Maia"
    }
    SUMMARY.write_text(json.dumps(summary, indent=2, ensure_ascii=False))
    print(f"\nTOTAL: {total} examples -> {OUTPUT}")
    print(f"Summary -> {SUMMARY}")

if __name__ == "__main__":
    main()
