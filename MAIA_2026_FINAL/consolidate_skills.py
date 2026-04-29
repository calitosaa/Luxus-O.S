#!/usr/bin/env python3
"""MAIA 2026 - Skills consolidation/indexing script.

Walks /home/user/Maia/gemma4-skills-os/skills/, indexes all 44,700+ skills,
verifies integrity, and merges the 6 source jsonl datasets into a single
SFT corpus at /home/user/Maia/finetuning/output/maia_training_merged_sft.jsonl.
"""
from __future__ import annotations
import json, os, sys, time
from pathlib import Path

SKILLS_ROOT = Path("/home/user/Maia/gemma4-skills-os/skills")
CATEGORIES = ["expansion", "general", "coding", "design", "memory",
              "web-search", "reasoning", "files", "voice"]
EXPECTED = {"expansion": 15000, "general": 11479, "coding": 10516,
            "design": 2474, "memory": 1958, "web-search": 1225,
            "reasoning": 1045, "files": 683, "voice": 344}

MANIFEST_OUT = Path("/home/user/Maia/MAIA_2026_FINAL/skills_activation_manifest.json")

SOURCE_JSONL = [
    "/home/user/Maia/finetuning/skills_data/skills_dataset.jsonl",
    "/home/user/Maia/finetuning/agents_data/agents_dataset.jsonl",
    "/home/user/Maia/finetuning/reasoning_patterns/reasoning_dataset.jsonl",
    "/home/user/Maia/finetuning/logic_examples/logic_dataset.jsonl",
    "/home/user/Maia/finetuning/instructions/training_prompts_dataset.jsonl",
    "/home/user/Maia/finetuning/workflow_examples/workflows_dataset.jsonl",
]
MERGED_SFT = Path("/home/user/Maia/finetuning/output/maia_training_merged_sft.jsonl")


def index_category(cat: str) -> int:
    p = SKILLS_ROOT / cat
    if not p.is_dir():
        return 0
    return sum(1 for _ in p.rglob("*") if _.is_file())


def verify_skills():
    counts = {c: index_category(c) for c in CATEGORIES}
    total = sum(counts.values())
    return counts, total


def merge_sft():
    n = 0
    MERGED_SFT.parent.mkdir(parents=True, exist_ok=True)
    with MERGED_SFT.open("w", encoding="utf-8") as out:
        for src in SOURCE_JSONL:
            if not os.path.exists(src):
                continue
            with open(src, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        obj = json.loads(line)
                    except Exception:
                        continue
                    row = {
                        "instruction": obj.get("instruction") or obj.get("prompt") or "",
                        "input": obj.get("input", ""),
                        "output": obj.get("output") or obj.get("chosen") or "",
                        "category": obj.get("category", "general"),
                    }
                    if not row["instruction"] or not row["output"]:
                        continue
                    out.write(json.dumps(row, ensure_ascii=False) + "\n")
                    n += 1
    return n


def main():
    counts, total = verify_skills()
    print(json.dumps({"counts": counts, "total": total, "expected_total": sum(EXPECTED.values())}))
    rows = merge_sft()
    print(json.dumps({"merged_sft": str(MERGED_SFT), "rows": rows, "size_bytes": MERGED_SFT.stat().st_size}))
    return 0


if __name__ == "__main__":
    sys.exit(main())
