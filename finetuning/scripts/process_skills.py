#!/usr/bin/env python3
"""Process skills directory into training examples."""
import json
from pathlib import Path

SKILLS_DIR = Path("/home/user/Maia/gemma4-skills-os/skills")
OUTPUT = Path("/home/user/Maia/finetuning/skills_data/skills_dataset.jsonl")
MAX_PER_CATEGORY = 100000  # process all files
MAX_FILE_BYTES = 4096

def process_skills():
    examples = []
    for skill_category_dir in sorted(SKILLS_DIR.iterdir()):
        if not skill_category_dir.is_dir():
            continue
        category = skill_category_dir.name
        count = 0
        for f in skill_category_dir.rglob("*"):
            if count >= MAX_PER_CATEGORY:
                break
            if not f.is_file():
                continue
            if f.suffix not in (".md", ".json", ".py", ".ts", ".js", ".txt"):
                continue
            try:
                content = f.read_text(encoding='utf-8', errors='ignore')[:MAX_FILE_BYTES]
                if len(content) < 50:
                    continue
                examples.append({
                    "instruction": f"Aplica la skill '{category}' usando: {f.stem}",
                    "input": f.name,
                    "output": content,
                    "category": f"skill_{category}",
                    "file_type": f.suffix
                })
                count += 1
            except Exception:
                continue
        print(f"  {category}: {count} examples")

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("w", encoding='utf-8') as f:
        for ex in examples:
            f.write(json.dumps(ex, ensure_ascii=False) + "\n")
    print(f"Skills total: {len(examples)} examples -> {OUTPUT}")

if __name__ == "__main__":
    process_skills()
