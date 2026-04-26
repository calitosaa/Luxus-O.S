#!/usr/bin/env python3
"""Process logic into training examples."""
import json
from pathlib import Path

LOGIC_DIR = Path("/home/user/Maia/gemma4-skills-os/logic")
OUTPUT = Path("/home/user/Maia/finetuning/logic_examples/logic_dataset.jsonl")
MAX_FILE_BYTES = 6000

def process_logic():
    examples = []
    if not LOGIC_DIR.exists():
        return
    for f in LOGIC_DIR.rglob("*"):
        if not f.is_file():
            continue
        if f.suffix not in (".md", ".json", ".py", ".ts", ".js", ".yaml", ".yml", ".txt", ".sh", ".rs", ".go"):
            continue
        try:
            content = f.read_text(encoding='utf-8', errors='ignore')[:MAX_FILE_BYTES]
            if len(content) < 50:
                continue
            rel = f.relative_to(LOGIC_DIR)
            examples.append({
                "instruction": f"Aplica la lógica de razonamiento: {f.stem}",
                "input": str(rel),
                "output": content,
                "category": "logic_reasoning",
                "logic_path": str(rel)
            })
        except Exception:
            continue

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("w", encoding='utf-8') as f:
        for ex in examples:
            f.write(json.dumps(ex, ensure_ascii=False) + "\n")
    print(f"Logic: {len(examples)} examples -> {OUTPUT}")

if __name__ == "__main__":
    process_logic()
