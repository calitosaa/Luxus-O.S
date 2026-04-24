#!/usr/bin/env python3
"""
Paso 0 — Clasificación y limpieza de gemma4-skills-os/.
Genera dataset/classification_report.txt con estadísticas completas.

Uso:
    python scripts/classify_and_clean.py
"""
import sys
from pathlib import Path
from collections import defaultdict

REPO_ROOT = Path(__file__).resolve().parent.parent
SKILLS_DIR = REPO_ROOT / "gemma4-skills-os"
DATASET_DIR = REPO_ROOT / "dataset"

BINARY_EXTENSIONS = frozenset({
    ".pack", ".png", ".jpg", ".jpeg", ".gif", ".ico", ".svg",
    ".woff", ".woff2", ".ttf", ".zip", ".gz", ".exe", ".bin",
    ".pyc", ".db", ".sqlite", ".mp3", ".mp4", ".avi", ".webp", ".pdf",
    ".pickle", ".pkl", ".pt", ".pth", ".onnx", ".h5", ".hdf5",
    ".npy", ".npz", ".parquet", ".arrow",
})

# Directories at the top level of gemma4-skills-os/ that are entirely useless
USELESS_TOP_DIRS = frozenset({
    "conectores-mcp",
    "mcp-providers",
    "plugins",
    "licenses",
    "scripts",
})

# Top-level dirs where EVERYTHING is useful
FULLY_USEFUL_TOP_DIRS = frozenset({
    "skills",
    "agents",
    "training-prompts",
    "workflows",
})

# Only these subdirs of logic/ are useful
USEFUL_LOGIC_SUBDIRS = frozenset({
    "pc-reasoning",
    "browser-use",
    "n8n",
    "openclaw",
    "mcp-protocol",
})


def classify(rel: str) -> tuple[str, str]:
    """Return ('useful'|'useless', reason_label) for a relative path."""
    parts = rel.replace("\\", "/").split("/")
    top = parts[0]

    # Root-level files (.gitignore, README, etc.)
    if len(parts) == 1:
        return "useless", "root file"

    # Binary / non-text extension
    suffix = Path(rel).suffix.lower()
    if suffix in BINARY_EXTENSIONS:
        return "useless", f"binary ({suffix})"

    # Entirely useless top-level dirs
    if top in USELESS_TOP_DIRS:
        return "useless", f"{top}/"

    # Fully useful top-level dirs
    if top in FULLY_USEFUL_TOP_DIRS:
        sub = parts[1] if len(parts) > 1 else "_root"
        return "useful", f"{top}/{sub}"

    # logic/ — only specific subdirs
    if top == "logic":
        sub = parts[1] if len(parts) > 1 else "_root"
        if sub in USEFUL_LOGIC_SUBDIRS:
            return "useful", f"logic/{sub}"
        return "useless", f"logic/{sub} (not in list)"

    return "useless", f"unknown top-level: {top}"


def main() -> None:
    if not SKILLS_DIR.is_dir():
        print(f"ERROR: {SKILLS_DIR} does not exist.", file=sys.stderr)
        sys.exit(1)

    DATASET_DIR.mkdir(parents=True, exist_ok=True)

    useful: list[tuple[str, str]] = []
    useless: list[tuple[str, str]] = []
    useful_by_folder: dict[str, int] = defaultdict(int)
    useless_by_reason: dict[str, int] = defaultdict(int)

    print(f"Scanning {SKILLS_DIR} ...", flush=True)
    all_files = [f for f in SKILLS_DIR.rglob("*") if f.is_file()]
    total = len(all_files)
    print(f"  {total:,} archivos encontrados. Clasificando...", flush=True)

    for idx, f in enumerate(all_files):
        rel = f.relative_to(SKILLS_DIR).as_posix()
        cat, reason = classify(rel)
        if cat == "useful":
            useful.append((rel, reason))
            useful_by_folder[reason] += 1
        else:
            useless.append((rel, reason))
            useless_by_reason[reason] += 1
        if (idx + 1) % 10_000 == 0:
            print(f"  {idx+1:,}/{total:,} procesados...", flush=True)

    # ── Write report ────────────────────────────────────────────────────────
    report = DATASET_DIR / "classification_report.txt"
    with report.open("w", encoding="utf-8") as out:
        W = out.write
        W("=" * 72 + "\n")
        W("  CLASSIFICATION REPORT — gemma4-skills-os\n")
        W("=" * 72 + "\n\n")
        W(f"  Total archivos encontrados : {total:>9,}\n")
        W(f"  Total archivos ÚTILES      : {len(useful):>9,}\n")
        W(f"  Total archivos INÚTILES    : {len(useless):>9,}\n\n")

        W("-" * 72 + "\n")
        W("ÚTILES — por carpeta:\n")
        W("-" * 72 + "\n")
        for folder, cnt in sorted(useful_by_folder.items(), key=lambda x: -x[1]):
            W(f"  {folder:<58} {cnt:>8,}\n")

        W("\n" + "-" * 72 + "\n")
        W("INÚTILES — por categoría:\n")
        W("-" * 72 + "\n")
        for reason, cnt in sorted(useless_by_reason.items(), key=lambda x: -x[1]):
            W(f"  {reason:<58} {cnt:>8,}\n")

        W("\n" + "-" * 72 + "\n")
        W(f"ARCHIVOS IGNORADOS (primeros 500 de {len(useless):,}):\n")
        W("-" * 72 + "\n")
        for rel, reason in useless[:500]:
            W(f"  IGNORE  [{reason:<35}]  {rel}\n")
        if len(useless) > 500:
            W(f"\n  ... y {len(useless) - 500:,} archivos ignorados adicionales\n")

    # ── Console summary ──────────────────────────────────────────────────────
    print(f"\n{'='*60}")
    print(f"  Total       : {total:,}")
    print(f"  ÚTILES      : {len(useful):,}")
    print(f"  INÚTILES    : {len(useless):,}")
    print(f"\nÚTILES — top 25 carpetas:")
    for folder, cnt in sorted(useful_by_folder.items(), key=lambda x: -x[1])[:25]:
        print(f"  {folder:<50}  {cnt:,}")
    print(f"\nINÚTILES — por categoría:")
    for reason, cnt in sorted(useless_by_reason.items(), key=lambda x: -x[1]):
        print(f"  {reason:<50}  {cnt:,}")
    print(f"\nReporte completo: {report}")


if __name__ == "__main__":
    main()
