#!/usr/bin/env python3
"""Process training prompts (system prompts) into examples."""
import json
import re
from pathlib import Path

TP_DIR = Path("/home/user/Maia/gemma4-skills-os/training-prompts")
OUTPUT = Path("/home/user/Maia/finetuning/instructions/training_prompts_dataset.jsonl")
MAX_FILE_BYTES = 8000

def strip_frontmatter(text):
    if text.startswith("---"):
        end = text.find("---", 3)
        if end != -1:
            return text[end+3:].strip()
    return text

def process_training_prompts():
    examples = []
    for f in TP_DIR.rglob("*.md"):
        if not f.is_file():
            continue
        try:
            content = f.read_text(encoding='utf-8', errors='ignore')
            content = strip_frontmatter(content)
            if len(content) < 100:
                continue
            content = content[:MAX_FILE_BYTES]
            category = f.parent.name
            examples.append({
                "instruction": "Actúa según las siguientes instrucciones del sistema",
                "input": "",
                "output": content,
                "category": f"system_prompt_{category}",
                "source": f.stem
            })
            examples.append({
                "instruction": f"¿Cómo es el comportamiento del sistema {f.stem}?",
                "input": "",
                "output": content[:2000],
                "category": f"system_behavior_{category}",
                "source": f.stem
            })
        except Exception:
            continue

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("w", encoding='utf-8') as f:
        for ex in examples:
            f.write(json.dumps(ex, ensure_ascii=False) + "\n")
    print(f"Training prompts: {len(examples)} examples -> {OUTPUT}")

if __name__ == "__main__":
    process_training_prompts()
