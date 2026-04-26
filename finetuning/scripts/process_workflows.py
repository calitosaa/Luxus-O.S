#!/usr/bin/env python3
"""Process workflows into training examples."""
import json
from pathlib import Path

WORKFLOWS_DIR = Path("/home/user/Maia/gemma4-skills-os/workflows")
OUTPUT = Path("/home/user/Maia/finetuning/workflow_examples/workflows_dataset.jsonl")
MAX_FILE_BYTES = 6000

def process_workflows():
    examples = []
    if not WORKFLOWS_DIR.exists():
        print("No workflows dir")
        return
    for f in WORKFLOWS_DIR.rglob("*"):
        if not f.is_file():
            continue
        if f.suffix not in (".md", ".json", ".yaml", ".yml", ".py", ".ts"):
            continue
        try:
            content = f.read_text(encoding='utf-8', errors='ignore')[:MAX_FILE_BYTES]
            if len(content) < 50:
                continue
            rel = f.relative_to(WORKFLOWS_DIR)
            examples.append({
                "instruction": f"Ejecuta el workflow: {f.stem}",
                "input": str(rel),
                "output": content,
                "category": "workflow_execution",
                "workflow_path": str(rel)
            })
            examples.append({
                "instruction": f"Explica cómo funciona el workflow {f.stem}",
                "input": "",
                "output": f"El workflow {f.stem} se define como:\n{content}",
                "category": "workflow_explanation",
                "workflow_path": str(rel)
            })
        except Exception:
            continue

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("w", encoding='utf-8') as f:
        for ex in examples:
            f.write(json.dumps(ex, ensure_ascii=False) + "\n")
    print(f"Workflows: {len(examples)} examples -> {OUTPUT}")

if __name__ == "__main__":
    process_workflows()
