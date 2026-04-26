#!/usr/bin/env python3
"""Process agents directory into training examples."""
import json
import os
from pathlib import Path

AGENTS_DIR = Path("/home/user/Maia/gemma4-skills-os/agents")
OUTPUT = Path("/home/user/Maia/finetuning/agents_data/agents_dataset.jsonl")

def process_agents():
    examples = []
    for agent_dir in sorted(AGENTS_DIR.iterdir()):
        if not agent_dir.is_dir():
            continue
        agent_name = agent_dir.name
        readme = agent_dir / "README.md"
        if readme.exists():
            try:
                content = readme.read_text(encoding='utf-8', errors='ignore')
                examples.append({
                    "instruction": f"Describe el agente {agent_name} y sus capacidades",
                    "input": "",
                    "output": content.strip(),
                    "category": "agent_description",
                    "agent": agent_name
                })
                examples.append({
                    "instruction": f"¿Cuándo debo usar el agente {agent_name}?",
                    "input": "",
                    "output": f"Usa {agent_name} cuando necesites: {content.strip()}",
                    "category": "agent_usage",
                    "agent": agent_name
                })
            except Exception:
                pass

        for code_file in agent_dir.glob("*.ts"):
            try:
                content = code_file.read_text(encoding='utf-8', errors='ignore')[:2000]
                examples.append({
                    "instruction": f"Muestra implementación TypeScript del agente {agent_name}",
                    "input": code_file.name,
                    "output": content,
                    "category": "agent_code",
                    "agent": agent_name
                })
            except Exception:
                pass

        for code_file in agent_dir.glob("*.py"):
            try:
                content = code_file.read_text(encoding='utf-8', errors='ignore')[:2000]
                examples.append({
                    "instruction": f"Muestra implementación Python del agente {agent_name}",
                    "input": code_file.name,
                    "output": content,
                    "category": "agent_code_python",
                    "agent": agent_name
                })
            except Exception:
                pass

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT.open("w", encoding='utf-8') as f:
        for ex in examples:
            f.write(json.dumps(ex, ensure_ascii=False) + "\n")
    print(f"Agents: {len(examples)} examples -> {OUTPUT}")

if __name__ == "__main__":
    process_agents()
