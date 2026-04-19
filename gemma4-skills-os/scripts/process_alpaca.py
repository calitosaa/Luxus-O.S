#!/usr/bin/env python3
"""process_alpaca.py — Convierte alpaca_data.json en archivos de training-prompts/conversation."""
import json, re
from pathlib import Path

BASE    = Path(__file__).parent.parent
DEST    = BASE / "training-prompts/conversation"
DEST.mkdir(parents=True, exist_ok=True)
ALPACA  = Path("/tmp/alpaca_data.json")
TODAY   = "2026-04-19"

SYSTEM = ("Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. "
          "Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, "
          "gestionar archivos, enviar emails, programar eventos, buscar en la web, "
          "generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. "
          "Respondes de forma natural, directa y precisa.")

def slugify(t):
    t = t.lower()[:60]
    t = re.sub(r"[^a-z0-9]+", "-", t)
    return t.strip("-")

data = json.loads(ALPACA.read_text())
print(f"Alpaca total: {len(data)} entries")

# Take all entries (52K) — they all go to training-prompts/conversation
total = 0
for i, item in enumerate(data):
    instruction = item.get("instruction", "").strip()
    inp         = item.get("input", "").strip()
    output      = item.get("output", "").strip()

    if not instruction or not output:
        continue

    user_msg = instruction
    if inp:
        user_msg += f"\n\nContexto/Input:\n{inp}"

    slug  = slugify(instruction) or f"entry-{i}"
    fname = f"alpaca-{i:05d}-{slug}.md"

    content = (
        f"---\n"
        f"source_repo: https://github.com/tatsu-lab/stanford_alpaca\n"
        f"source_file: alpaca_data.json[{i}]\n"
        f"license: Apache-2.0\n"
        f"category: training-prompts/conversation\n"
        f"dataset: stanford-alpaca\n"
        f"imported_at: {TODAY}\n"
        f"---\n\n"
        f"## Sistema\n{SYSTEM}\n\n"
        f"## Usuario\n{user_msg}\n\n"
        f"## Asistente\n{output}\n"
    )

    (DEST / fname).write_text(content, encoding="utf-8")
    total += 1
    if total % 5000 == 0:
        print(f"  {total:,} archivos escritos...")

print(f"\nTotal training-prompts/conversation: {total:,} archivos")
