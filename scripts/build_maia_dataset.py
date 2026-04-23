"""
Luxus O.S  ·  Maia Dataset Builder
-----------------------------------
Recorre TODO gemma4-skills-os/ y produce el dataset de fine-tuning de Maia.

- training-prompts/  -> se usan TAL CUAL (ya traen <system>/<instruction>/<example_interaction>)
- skills/ agents/ workflows/ logic/ plugins/ mcp-providers/ conectores-mcp/
    -> se convierten en pares {instruction, input, output} con metadata de categoria

Salida:
  Maia/training_data.jsonl                (dataset fine-tune unificado)
  Maia/rag_manifest.jsonl                 (indice de archivos para RAG)
  Maia/dataset_stats.json                 (estadisticas)

Rutas relativas al repo. No depende del SO. No necesita GPU.
"""

from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path
from collections import Counter

REPO_ROOT = Path(__file__).resolve().parent.parent
SOURCE = REPO_ROOT / "gemma4-skills-os"
OUT_DIR = REPO_ROOT / "Maia"
OUT_DIR.mkdir(parents=True, exist_ok=True)

TRAIN_OUT = OUT_DIR / "training_data.jsonl"
RAG_OUT = OUT_DIR / "rag_manifest.jsonl"
STATS_OUT = OUT_DIR / "dataset_stats.json"

# ---- Categorias y a donde va cada cosa -----------------------------------

FINETUNE_FOLDERS = {
    "training-prompts": "Luxus Training Prompt",
    "skills": "Luxus Skill",
    "agents": "Luxus Agent",
    "workflows": "Luxus Workflow",
    "logic": "Luxus Logic",
    "plugins": "Luxus Plugin",
    "mcp-providers": "MCP Provider",
    "conectores-mcp": "MCP Connector",
}

TEXT_EXTS = {".md", ".txt", ".ts", ".tsx", ".js", ".py", ".json", ".yaml", ".yml",
             ".css", ".html", ".xml", ".sh", ".sql"}

MAX_CHARS_PER_SAMPLE = 12_000   # trocea archivos gigantes para no petar la ctx
MIN_CHARS_PER_SAMPLE = 40       # descarta basura

# ---- Utilidades ----------------------------------------------------------

FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)

def strip_frontmatter(text: str) -> tuple[str, dict]:
    m = FRONTMATTER_RE.match(text)
    if not m:
        return text, {}
    body = text[m.end():]
    meta = {}
    for line in m.group(1).splitlines():
        if ":" in line:
            k, _, v = line.partition(":")
            meta[k.strip()] = v.strip()
    return body, meta


def chunk(text: str, size: int = MAX_CHARS_PER_SAMPLE) -> list[str]:
    if len(text) <= size:
        return [text]
    out, i = [], 0
    while i < len(text):
        out.append(text[i : i + size])
        i += size
    return out


def short_hash(s: str) -> str:
    return hashlib.sha256(s.encode("utf-8", "ignore")).hexdigest()[:16]


def derive_name(filename: str) -> str:
    return Path(filename).stem.split("__")[-1].replace("_", " ").replace("-", " ")


# ---- Builder principal ---------------------------------------------------

def build():
    seen_hashes: set[str] = set()
    per_cat = Counter()
    per_ext = Counter()
    skipped_empty = 0
    skipped_dup = 0
    total_samples = 0
    total_rag = 0

    with TRAIN_OUT.open("w", encoding="utf-8") as f_train, \
         RAG_OUT.open("w", encoding="utf-8") as f_rag:

        for folder, label in FINETUNE_FOLDERS.items():
            folder_path = SOURCE / folder
            if not folder_path.exists():
                print(f"[skip] {folder_path} no existe")
                continue
            print(f"[scan] {folder} -> {label}")

            for fp in folder_path.rglob("*"):
                if not fp.is_file():
                    continue
                if fp.suffix.lower() not in TEXT_EXTS:
                    continue
                try:
                    raw = fp.read_text(encoding="utf-8", errors="ignore")
                except Exception:
                    continue

                body, meta = strip_frontmatter(raw) if fp.suffix.lower() == ".md" else (raw, {})
                body = body.strip()

                if len(body) < MIN_CHARS_PER_SAMPLE:
                    skipped_empty += 1
                    continue

                rel = fp.relative_to(REPO_ROOT).as_posix()

                # --- Manifiesto RAG (todos los archivos van aqui) ---
                f_rag.write(json.dumps({
                    "path": rel,
                    "category": folder,
                    "label": label,
                    "ext": fp.suffix.lower(),
                    "name": derive_name(fp.name),
                    "size": len(body),
                    "meta": meta,
                    "hash": short_hash(body),
                }, ensure_ascii=False) + "\n")
                total_rag += 1

                # --- Dataset fine-tune ---
                # training-prompts ya son dataset; los otros los envolvemos
                if folder == "training-prompts":
                    # Cada archivo es un ejemplo completo. Dejar tal cual.
                    h = short_hash(body[:1024])
                    if h in seen_hashes:
                        skipped_dup += 1
                        continue
                    seen_hashes.add(h)

                    f_train.write(json.dumps({
                        "instruction": f"Responde siguiendo el protocolo Luxus para: {derive_name(fp.name)}",
                        "input": "",
                        "output": body[:MAX_CHARS_PER_SAMPLE],
                        "category": folder,
                    }, ensure_ascii=False) + "\n")
                    total_samples += 1
                else:
                    name = derive_name(fp.name)
                    is_code = fp.suffix.lower() in {".ts", ".tsx", ".js", ".py",
                                                    ".json", ".yaml", ".yml", ".sh", ".sql"}
                    for piece in chunk(body):
                        h = short_hash(piece[:1024])
                        if h in seen_hashes:
                            skipped_dup += 1
                            continue
                        seen_hashes.add(h)

                        if is_code:
                            output = f"# {label}: {name}\n\n```{fp.suffix.lstrip('.')}\n{piece}\n```"
                        else:
                            output = piece

                        f_train.write(json.dumps({
                            "instruction": f"Explica e implementa el {label} de Luxus O.S: {name}",
                            "input": f"Categoria: {label} | Ruta: {rel}",
                            "output": output,
                            "category": folder,
                        }, ensure_ascii=False) + "\n")
                        total_samples += 1

                per_cat[folder] += 1
                per_ext[fp.suffix.lower()] += 1

    stats = {
        "total_finetune_samples": total_samples,
        "total_rag_documents": total_rag,
        "skipped_empty": skipped_empty,
        "skipped_duplicates": skipped_dup,
        "per_category": dict(per_cat),
        "per_extension": dict(per_ext),
        "output": {
            "training_jsonl": str(TRAIN_OUT.relative_to(REPO_ROOT)),
            "rag_manifest": str(RAG_OUT.relative_to(REPO_ROOT)),
        },
    }
    STATS_OUT.write_text(json.dumps(stats, indent=2, ensure_ascii=False), encoding="utf-8")

    print("")
    print("==================== MAIA DATASET ====================")
    print(f"  Ejemplos fine-tune : {total_samples:,}")
    print(f"  Documentos RAG     : {total_rag:,}")
    print(f"  Descartados (vacio): {skipped_empty:,}")
    print(f"  Descartados (dup)  : {skipped_dup:,}")
    print("  Por categoria      :")
    for k, v in per_cat.most_common():
        print(f"    - {k:24s} {v:,}")
    print(f"  Salida             : {TRAIN_OUT}")
    print(f"                       {RAG_OUT}")
    print(f"                       {STATS_OUT}")
    print("=====================================================")


if __name__ == "__main__":
    build()
