#!/usr/bin/env python3
"""Process content missed by original conversion scripts:
1. training-prompts .txt files (specialty categories: vision, rag, spanish, safety, etc.)
2. agent .md files beyond README.md (ruflo docs, cookbook content)
"""
import json
from pathlib import Path

BASE = Path(__file__).resolve().parents[2] / "gemma4-skills-os"
OUTPUT = Path(__file__).resolve().parents[1] / "output" / "maia_gemma4_finetune.jsonl.part_03"
MAX_BYTES = 8000

def strip_frontmatter(text):
    text = text.lstrip("﻿")
    if text.startswith("---"):
        end = text.find("---", 3)
        if end != -1:
            return text[end+3:].strip()
    return text.strip()

def to_gemma(user, assistant, category, source):
    return {
        "messages": [
            {"role": "user", "content": user},
            {"role": "assistant", "content": assistant}
        ],
        "metadata": {"category": category, "source": source}
    }

examples = []

# ── 1. training-prompts .txt specialty files ──────────────────────────────────
TP_DIR = BASE / "training-prompts"
skip_categories = {"conversation", "system-base"}  # already processed as .md
for f in TP_DIR.rglob("*.txt"):
    if f.parent.parent.name in skip_categories or f.parent.name in skip_categories:
        continue
    try:
        raw = f.read_text(encoding="utf-8", errors="ignore")
        content = strip_frontmatter(raw)
        if len(content) < 100:
            continue
        cat = f.parent.parent.name if f.parent.name == "generated" else f.parent.name
        trunc = content[:MAX_BYTES]
        examples.append(to_gemma(
            "Actúa según las siguientes instrucciones del sistema",
            trunc,
            f"system_prompt_{cat}", f.stem
        ))
        examples.append(to_gemma(
            f"¿Cómo es el comportamiento del sistema {f.stem}?",
            trunc[:2000],
            f"system_behavior_{cat}", f.stem
        ))
    except Exception as e:
        print(f"Error processing {f}: {e}")
        continue

print(f"training-prompts .txt: {len(examples)//2} files → {len(examples)} examples")

# ── 2. agents — non-README .md files ─────────────────────────────────────────
AGENTS_DIR = BASE / "agents"
agent_md_count = 0
for agent_dir in sorted(AGENTS_DIR.iterdir()):
    if not agent_dir.is_dir():
        continue
    agent_name = agent_dir.name
    for f in agent_dir.rglob("*.md"):
        if f.name == "README.md":
            continue
        try:
            raw = f.read_text(encoding="utf-8", errors="ignore")
            content = strip_frontmatter(raw)
            if len(content) < 150:
                continue
            trunc = content[:MAX_BYTES]
            stem = f.stem
            examples.append(to_gemma(
                f"Documenta el componente {stem} del agente {agent_name}",
                trunc,
                f"agent_doc_{agent_name}", stem
            ))
            agent_md_count += 1
        except Exception as e:
            print(f"Error processing {f}: {e}")
            continue

print(f"agents non-README .md: {agent_md_count} files → {agent_md_count} examples")

# ── Write output ─────────────────────────────────────────────────────────────
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
with OUTPUT.open("w", encoding="utf-8") as out:
    for ex in examples:
        out.write(json.dumps(ex, ensure_ascii=False) + "\n")

print(f"\nTOTAL NEW EXAMPLES: {len(examples)}")
print(f"Output: {OUTPUT}")
