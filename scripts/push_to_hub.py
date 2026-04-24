#!/usr/bin/env python3
"""
Sube el dataset MAIA a HuggingFace Hub como un Dataset privado.

Uso local:
    HF_TOKEN=hf_... python scripts/push_to_hub.py

Variables de entorno:
    HF_TOKEN        — token de HuggingFace con permisos write
    HF_USERNAME     — tu usuario HF (e.g. "calitosaa")
    HF_DATASET_REPO — nombre del repo (default: "maia-training-data")

El repo creado será: https://huggingface.co/datasets/{HF_USERNAME}/{HF_DATASET_REPO}
"""
import os
import sys
from pathlib import Path

REPO_ROOT   = Path(__file__).resolve().parent.parent
DATASET_DIR = REPO_ROOT / "dataset"

TRAIN_FILE  = DATASET_DIR / "maia_train.jsonl"
VAL_FILE    = DATASET_DIR / "maia_val.jsonl"
STATS_FILE  = DATASET_DIR / "stats.json"
REPORT_FILE = DATASET_DIR / "classification_report.txt"


def main() -> None:
    token    = os.environ.get("HF_TOKEN", "")
    username = os.environ.get("HF_USERNAME", "")
    repo_name = os.environ.get("HF_DATASET_REPO", "maia-training-data")

    if not token:
        print("ERROR: HF_TOKEN no está definido.", file=sys.stderr)
        print("  Configúralo como secreto en GitHub o exporta HF_TOKEN=hf_...", file=sys.stderr)
        sys.exit(1)

    if not username:
        # Try to get username from the token
        try:
            from huggingface_hub import whoami
            info = whoami(token=token)
            username = info["name"]
            print(f"Usuario HF detectado: {username}")
        except Exception as e:
            print(f"ERROR: HF_USERNAME no definido y no se pudo detectar: {e}", file=sys.stderr)
            sys.exit(1)

    repo_id = f"{username}/{repo_name}"
    print(f"Destino: https://huggingface.co/datasets/{repo_id}")

    # ── Verify files exist ─────────────────────────────────────────────��───
    required = [TRAIN_FILE, VAL_FILE]
    for f in required:
        if not f.exists():
            print(f"ERROR: {f} no encontrado. Ejecuta primero: python scripts/to_jsonl.py",
                  file=sys.stderr)
            sys.exit(1)

    # ── Create / ensure dataset repo exists ───────────────────────────────
    from huggingface_hub import HfApi, DatasetCard

    api = HfApi(token=token)

    try:
        api.create_repo(
            repo_id   = repo_id,
            repo_type = "dataset",
            private   = True,
            exist_ok  = True,
        )
        print(f"Repo asegurado: {repo_id}")
    except Exception as e:
        print(f"ERROR creando repo: {e}", file=sys.stderr)
        sys.exit(1)

    # ── Upload files ───────────────────────────────────────────────────────
    files_to_upload = [
        (TRAIN_FILE,  "data/train.jsonl"),
        (VAL_FILE,    "data/val.jsonl"),
    ]
    if STATS_FILE.exists():
        files_to_upload.append((STATS_FILE, "stats.json"))
    if REPORT_FILE.exists():
        files_to_upload.append((REPORT_FILE, "classification_report.txt"))

    for local_path, hf_path in files_to_upload:
        size_mb = local_path.stat().st_size / 1e6
        print(f"Subiendo {local_path.name} ({size_mb:.1f} MB) → {hf_path} ...")
        api.upload_file(
            path_or_fileobj = str(local_path),
            path_in_repo    = hf_path,
            repo_id         = repo_id,
            repo_type       = "dataset",
            commit_message  = f"Update {hf_path}",
        )
        print(f"  ✓ {hf_path}")

    # ── Dataset card ───────────────────────────────────────────────────────
    import json
    stats = {}
    if STATS_FILE.exists():
        with STATS_FILE.open() as f:
            stats = json.load(f)

    train_n = stats.get("train", {}).get("total", "?")
    val_n   = stats.get("val",   {}).get("total", "?")

    card_content = f"""---
license: mit
language:
- es
- en
tags:
- maia
- luxus-os
- fine-tuning
- gemma
- instruction-tuning
size_categories:
- 100K<n<1M
---

# MAIA Training Dataset

Dataset de fine-tuning para **MAIA**, la consciencia central de Luxus O.S,
construida sobre Gemma 4 E4B.

## Estadísticas

| Split | Ejemplos |
|-------|----------|
| Train | {train_n:,} |
| Val   | {val_n:,} |

## Categorías

- **skills** (~57%): código (SQL, TS, Python, JS), markdown con mejores prácticas
- **training-prompts** (~30%): conversaciones Alpaca en formato sistema/usuario/asistente
- **agents** (~7%): orquestación de agentes especializados
- **workflows** (~4%): automatizaciones n8n y pipelines
- **logic** (~2%): razonamiento sobre herramientas (n8n, MCP, browser, PC)

## Formato

Cada línea es un JSON con estructura messages[]:
```json
{{"messages": [
  {{"role": "system",    "content": "Eres Maia..."}},
  {{"role": "user",      "content": "..."}},
  {{"role": "assistant", "content": "..."}}
]}}
```

## Uso

```python
from datasets import load_dataset
ds = load_dataset("{repo_id}", split="train")
```

## Modelo

Fine-tuning con `Maia_Trainer_v2.ipynb` usando Unsloth + LoRA (r=16) sobre
`google/gemma-4-e4b-it` (4-bit, T4 compatible).
"""

    try:
        card = DatasetCard(card_content)
        card.push_to_hub(repo_id, token=token)
        print("  ✓ Dataset card actualizado")
    except Exception as e:
        print(f"  ⚠ Dataset card: {e}")

    print(f"\n✓ Dataset disponible en: https://huggingface.co/datasets/{repo_id}")
    print(f"  Para cargarlo en tu notebook:")
    print(f'  ds = load_dataset("{repo_id}", data_files={{"train":"data/train.jsonl","validation":"data/val.jsonl"}})')


if __name__ == "__main__":
    main()
