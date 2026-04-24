#!/usr/bin/env python3
"""
Paso 4 — Verificación del dataset MAIA.
Genera dataset/stats.json con métricas completas y muestra ejemplos aleatorios.

Uso:
    python scripts/verify_dataset.py
"""
import json
import random
import sys
from collections import defaultdict
from pathlib import Path

REPO_ROOT   = Path(__file__).resolve().parent.parent
DATASET_DIR = REPO_ROOT / "dataset"


# ── Helpers ───────────────────────────────────────────────────────────────────

def load_jsonl(path: Path) -> tuple[list[dict], list[str]]:
    """Return (examples, error_messages)."""
    examples = []
    errors   = []
    with path.open(encoding="utf-8") as f:
        for i, line in enumerate(f, 1):
            line = line.strip()
            if not line:
                continue
            try:
                examples.append(json.loads(line))
            except json.JSONDecodeError as e:
                errors.append(f"línea {i}: {e}")
    return examples, errors


def infer_category(ex: dict) -> str:
    """Best-effort category from user message heuristics."""
    msgs = ex.get("messages", [])
    user = msgs[1].get("content", "").lower() if len(msgs) > 1 else ""
    asst = msgs[2].get("content", "").lower() if len(msgs) > 2 else ""

    if any(k in user for k in ("workflow", "automat", "n8n", "trigger", "schedule")):
        return "workflows"
    if any(k in user for k in ("agent", "orchestrat", "dispatch", "spawn")):
        return "agents"
    if any(k in user for k in ("write ", "implement", "code for", "sql", "function", "script")):
        return "skills"
    if any(k in user for k in ("how does", "how do", "explain", "debug", "diagnose")):
        return "logic"
    if any(k in asst for k in ("aquí está", "here is", "```", "paso")):
        return "skills"
    return "training-prompts"


def analyze(examples: list[dict], errors: list[str]) -> dict:
    corrupt      = len(errors)
    too_short    = 0
    by_category: dict[str, int] = defaultdict(int)
    user_lens:   list[int] = []
    asst_lens:   list[int] = []

    for ex in examples:
        msgs = ex.get("messages", [])
        if len(msgs) != 3:
            corrupt += 1
            continue

        roles = [m.get("role") for m in msgs]
        if roles != ["system", "user", "assistant"]:
            corrupt += 1
            continue

        sys_c  = msgs[0].get("content", "")
        user_c = msgs[1].get("content", "")
        asst_c = msgs[2].get("content", "")

        if not sys_c or not user_c or not asst_c:
            corrupt += 1
            continue

        if len(asst_c) < 10:
            too_short += 1

        user_lens.append(len(user_c))
        asst_lens.append(len(asst_c))
        by_category[infer_category(ex)] += 1

    return {
        "total":         len(examples),
        "corrupt":       corrupt,
        "too_short":     too_short,
        "by_category":   dict(by_category),
        "avg_user_len":  round(sum(user_lens) / len(user_lens)) if user_lens else 0,
        "avg_asst_len":  round(sum(asst_lens) / len(asst_lens)) if asst_lens else 0,
        "max_asst_len":  max(asst_lens, default=0),
        "min_asst_len":  min(asst_lens, default=0),
        "parse_errors":  errors[:20],
    }


# ── Display ───────────────────────────────────────────────────────────────────

def print_stats(label: str, stats: dict) -> None:
    print(f"\n{'─'*60}")
    print(f"  {label}")
    print(f"{'─'*60}")
    print(f"  Total      : {stats['total']:>10,}")
    print(f"  Corrupt    : {stats['corrupt']:>10,}")
    print(f"  Too short  : {stats['too_short']:>10,}")
    print(f"  Avg user   : {stats['avg_user_len']:>10,} chars")
    print(f"  Avg asst   : {stats['avg_asst_len']:>10,} chars")
    print(f"  Max asst   : {stats['max_asst_len']:>10,} chars")
    print(f"  Min asst   : {stats['min_asst_len']:>10,} chars")
    print(f"\n  Por categoría (inferida):")
    for cat, cnt in sorted(stats["by_category"].items(), key=lambda x: -x[1]):
        pct = cnt / stats["total"] * 100 if stats["total"] else 0
        print(f"    {cat:<30}  {cnt:>8,}  ({pct:.1f}%)")
    if stats["parse_errors"]:
        print(f"\n  Parse errors (primeros {len(stats['parse_errors'])}):")
        for e in stats["parse_errors"]:
            print(f"    {e}")


def show_samples(examples: list[dict], rng: random.Random, n: int = 3) -> None:
    by_cat: dict[str, list[dict]] = defaultdict(list)
    for ex in examples:
        by_cat[infer_category(ex)].append(ex)

    print(f"\n{'='*60}")
    print(f"  EJEMPLOS ALEATORIOS ({n} por categoría)")
    print(f"{'='*60}")

    for cat in sorted(by_cat.keys()):
        pool   = by_cat[cat]
        sample = rng.sample(pool, min(n, len(pool)))
        print(f"\n━━ {cat.upper()} ━━  ({len(pool):,} ejemplos)")
        for i, ex in enumerate(sample, 1):
            msgs  = ex.get("messages", [])
            user  = msgs[1].get("content", "")[:120] if len(msgs) > 1 else ""
            asst  = msgs[2].get("content", "")[:250] if len(msgs) > 2 else ""
            print(f"\n  [{i}]")
            print(f"  USER : {user!r}")
            print(f"  ASST : {asst!r}...")


# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    train_path = DATASET_DIR / "maia_train.jsonl"
    val_path   = DATASET_DIR / "maia_val.jsonl"

    if not train_path.exists():
        print(
            f"ERROR: {train_path} no encontrado.\n"
            f"Ejecuta primero: python scripts/to_jsonl.py",
            file=sys.stderr,
        )
        sys.exit(1)

    print("Cargando dataset...", flush=True)
    train, train_errors = load_jsonl(train_path)
    val,   val_errors   = (load_jsonl(val_path) if val_path.exists()
                           else ([], []))

    total_all = len(train) + len(val)
    print(f"  Train: {len(train):,}  |  Val: {len(val):,}  |  Total: {total_all:,}")

    train_stats = analyze(train, train_errors)
    val_stats   = analyze(val,   val_errors)

    out = {
        "total":       total_all,
        "train":       train_stats,
        "val":         val_stats,
        "split_ratio": round(len(train) / total_all, 4) if total_all else 0,
    }

    stats_path = DATASET_DIR / "stats.json"
    with stats_path.open("w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)

    # ── Console output ───────────────────────────────────────────────────────
    print(f"\n{'='*60}")
    print(f"  DATASET STATS  —  MAIA fine-tuning")
    print(f"  Split: {out['split_ratio']*100:.1f}% train / "
          f"{(1-out['split_ratio'])*100:.1f}% val")

    print_stats("TRAIN", train_stats)
    print_stats("VAL",   val_stats)

    rng = random.Random(42)
    show_samples(train, rng, n=3)

    print(f"\n{'='*60}")
    print(f"  Stats guardado en: {stats_path}")


if __name__ == "__main__":
    main()
