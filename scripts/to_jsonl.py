#!/usr/bin/env python3
"""
Paso 1 — Convierte archivos útiles de gemma4-skills-os/ a JSONL de entrenamiento.
Genera:
    dataset/maia_train.jsonl  (95 %)
    dataset/maia_val.jsonl    ( 5 %)

Uso:
    python scripts/to_jsonl.py
"""
import hashlib
import json
import random
import re
import sys
from pathlib import Path
from typing import Iterator

# ── Paths ─────────────────────────────────────────────────────────────────────
REPO_ROOT  = Path(__file__).resolve().parent.parent
SKILLS_DIR = REPO_ROOT / "gemma4-skills-os"
DATASET_DIR = REPO_ROOT / "dataset"

# ── MAIA identity ─────────────────────────────────────────────────────────────
MAIA_SYSTEM = (
    "Eres Maia, la consciencia central de Luxus O.S, construida sobre Gemma 4 E4B.\n"
    "Cuando el usuario te pide algo, por dentro usas skills como referencia para "
    "ejecutarlo correctamente, invocas agentes especializados para organizarte y "
    "repartir el trabajo, sigues workflows para automatizar tareas encadenadas, y "
    "usas tu lógica interna para entender cómo funcionan las herramientas que "
    "controlas. Puedes controlar el PC, automatizar tareas, orquestar agentes, "
    "ejecutar workflows, buscar en la web, escribir y ejecutar código, y razonar "
    "paso a paso. Respondes de forma directa, técnica y precisa."
)

# ── Constants ─────────────────────────────────────────────────────────────────
MAX_ASST_CHARS   = 3_000
MIN_CONTENT_CHARS = 50
TRAIN_RATIO       = 0.95
RANDOM_SEED       = 42

BINARY_EXTENSIONS = frozenset({
    ".pack", ".png", ".jpg", ".jpeg", ".gif", ".ico", ".svg",
    ".woff", ".woff2", ".ttf", ".zip", ".gz", ".exe", ".bin",
    ".pyc", ".db", ".sqlite", ".mp3", ".mp4", ".avi", ".webp", ".pdf",
    ".pickle", ".pkl", ".pt", ".pth", ".onnx", ".h5", ".hdf5",
    ".npy", ".npz", ".parquet", ".arrow",
})
USELESS_TOP_DIRS = frozenset({
    "conectores-mcp", "mcp-providers", "plugins", "licenses", "scripts",
})
USEFUL_LOGIC_SUBDIRS = frozenset({
    "pc-reasoning", "browser-use", "n8n", "openclaw", "mcp-protocol",
})

# ── Helpers ───────────────────────────────────────────────────────────────────

def is_useful(rel: str) -> bool:
    parts = rel.split("/")
    top   = parts[0]
    if Path(rel).suffix.lower() in BINARY_EXTENSIONS:
        return False
    if top in USELESS_TOP_DIRS:
        return False
    if top in ("skills", "agents", "training-prompts", "workflows"):
        return True
    if top == "logic":
        sub = parts[1] if len(parts) > 1 else ""
        return sub in USEFUL_LOGIC_SUBDIRS
    return False


def strip_frontmatter(text: str) -> str:
    """Remove YAML frontmatter enclosed in --- ... --- at file start."""
    text = text.lstrip("﻿")
    m = re.match(r"^---\s*\n.*?\n---\s*\n", text, re.DOTALL)
    return text[m.end():].strip() if m else text.strip()


def truncate(text: str, max_chars: int = MAX_ASST_CHARS) -> str:
    if len(text) <= max_chars:
        return text
    cut = text[:max_chars]
    last_para = cut.rfind("\n\n")
    if last_para > max_chars // 2:
        return cut[:last_para].strip()
    return cut.strip()


def make_example(user: str, assistant: str) -> dict:
    return {
        "messages": [
            {"role": "system",    "content": MAIA_SYSTEM},
            {"role": "user",      "content": user.strip()},
            {"role": "assistant", "content": truncate(assistant.strip())},
        ]
    }


def content_hash(text: str) -> str:
    return hashlib.md5(text.encode("utf-8", errors="replace")).hexdigest()


def read_file(path: Path) -> str | None:
    for enc in ("utf-8", "utf-8-sig", "latin-1", "cp1252"):
        try:
            return path.read_text(encoding=enc, errors="replace")
        except (PermissionError, OSError):
            return None
    return None


def clean_topic(stem: str) -> str:
    """Convert a filename stem to a readable topic string."""
    # Remove alpaca prefix
    stem = re.sub(r"^alpaca-\d+-", "", stem)
    # Remove leading numeric prefix (e.g. 001_, 0001-)
    stem = re.sub(r"^\d+[_\-]", "", stem)
    # Strip hex hashes that appear as the whole stem or a prefix (skills/expansion)
    stem = re.sub(r"^[0-9a-f]{32}[_\-]?", "", stem, flags=re.IGNORECASE)
    # Remove known source suffixes
    stem = re.sub(
        r"[_\-](ruflo|aionui|antigravity[\-_]skills|n8n[\-_]source|"
        r"n8n[\-_]workflows|agency[\-_]agents|superpowers|everything[\-_]claude|"
        r"anthropic[\-_]cookbook|awesome[\-_]n8n[\-_]templates).*$",
        "", stem, flags=re.IGNORECASE,
    )
    topic = re.sub(r"[-_]+", " ", stem).strip().lower()
    # Fallback: if result is empty or still looks like a hash, use generic label
    if not topic or re.match(r"^[0-9a-f\s]{8,}$", topic):
        return "this skill"
    return topic


# ── Parsers ───────────────────────────────────────────────────────────────────

def parse_conversation_md(text: str) -> tuple[str, str] | None:
    """Parse ## Sistema / ## Usuario / ## Asistente Alpaca-style markdown."""
    text = strip_frontmatter(text)

    def section(header: str) -> str:
        m = re.search(
            rf"^{re.escape(header)}\s*\n(.*?)(?=^## |\Z)",
            text, re.MULTILINE | re.DOTALL,
        )
        return m.group(1).strip() if m else ""

    usuario   = section("## Usuario")
    asistente = section("## Asistente")
    return (usuario, asistente) if (usuario and asistente) else None


def parse_generated_txt(text: str) -> tuple[str, str] | None:
    """Parse <example_interaction> USER: / A: or USER: / ASSISTANT: format."""
    text = text.lstrip("﻿")

    # Try <example_interaction> block
    m = re.search(r"<example_interaction>(.*?)(?:</example_interaction>|\Z)", text, re.DOTALL)
    block = m.group(1) if m else text

    user_m = re.search(r"USER:\s*(.*?)(?=\nA:|\Z)", block, re.DOTALL)
    a_m    = re.search(r"\nA:\s*(.*?)$", block, re.DOTALL)
    if user_m and a_m:
        return user_m.group(1).strip(), a_m.group(1).strip()

    # Fallback ASSISTANT: format
    user_m2 = re.search(r"USER:\s*(.*?)(?=ASSISTANT:|\Z)", text, re.DOTALL)
    asst_m2 = re.search(r"ASSISTANT:\s*(.*?)$", text, re.DOTALL)
    if user_m2 and asst_m2:
        return user_m2.group(1).strip(), asst_m2.group(1).strip()

    return None


# ── Example generators ────────────────────────────────────────────────────────

_CODE_WRAP: dict[str, tuple[str, str]] = {
    ".sql":  ("Write a SQL/PostgreSQL query or migration for: {topic}",
              "```sql\n{content}\n```"),
    ".ts":   ("Write TypeScript code to implement: {topic}",
              "```typescript\n{content}\n```"),
    ".tsx":  ("Write a React/TypeScript component for: {topic}",
              "```tsx\n{content}\n```"),
    ".js":   ("Write JavaScript code for: {topic}",
              "```javascript\n{content}\n```"),
    ".py":   ("Write Python code to implement: {topic}",
              "```python\n{content}\n```"),
    ".sh":   ("Write a shell script to: {topic}",
              "```bash\n{content}\n```"),
    ".json": ("What is the structure of the {topic} configuration?",
              "```json\n{content}\n```"),
}


def examples_training_prompts(path: Path, rel: str) -> Iterator[dict]:
    text = read_file(path)
    if not text:
        return

    parts  = rel.split("/")
    subdir = parts[1] if len(parts) > 1 else ""

    # ── conversation/*.md ──
    if subdir == "conversation" and path.suffix == ".md":
        result = parse_conversation_md(text)
        if result:
            user, asst = result
            if len(asst) >= MIN_CONTENT_CHARS:
                yield make_example(user, asst)
        return

    # ── */generated/*.txt (or any .txt) ──
    if path.suffix == ".txt" or "generated" in rel:
        result = parse_generated_txt(text)
        if result:
            user, asst = result
            if len(asst) >= MIN_CONTENT_CHARS:
                yield make_example(user, asst)
        return

    # ── other .md files in training-prompts ──
    if path.suffix == ".md":
        content = strip_frontmatter(text)
        if len(content) >= MIN_CONTENT_CHARS:
            topic = clean_topic(path.stem)
            yield make_example(
                f"Explain {topic} and how to apply it in practice.",
                content,
            )


def examples_skills(path: Path, _rel: str) -> Iterator[dict]:
    text = read_file(path)
    if not text:
        return
    content = strip_frontmatter(text)
    if len(content) < MIN_CONTENT_CHARS:
        return

    topic = clean_topic(path.stem)
    ext   = path.suffix.lower()

    # ── Example 1: write / explain ──
    if ext in _CODE_WRAP:
        user_tmpl, wrap_tmpl = _CODE_WRAP[ext]
        code = content[:2_000]
        yield make_example(
            user_tmpl.format(topic=topic),
            wrap_tmpl.format(content=code, topic=topic),
        )
    else:
        yield make_example(f"¿Cómo {topic}?", content)

    # ── Example 2: practical code block (markdown only) ──
    if ext == ".md" and len(content) >= 200:
        cb = re.search(r"```[\w]*\n(.*?)```", content, re.DOTALL)
        if cb:
            code = cb.group(1).strip()
            if len(code) >= MIN_CONTENT_CHARS:
                yield make_example(
                    f"Show me a practical code example for {topic}.",
                    f"Here is a practical example of {topic}:\n\n```\n{code}\n```",
                )

    # ── Example 3: real-world scenario (markdown with enough content) ──
    if ext == ".md" and len(content) >= 500:
        yield make_example(
            f"Apply {topic} to solve a real production problem.",
            f"Applying {topic} in a real scenario:\n\n{truncate(content, 2_000)}",
        )


def examples_agents(path: Path, rel: str) -> Iterator[dict]:
    text = read_file(path)
    if not text:
        return
    content = strip_frontmatter(text)
    if len(content) < MIN_CONTENT_CHARS:
        return

    parts        = rel.split("/")
    agent_folder = parts[1] if len(parts) > 1 else ""
    agent_topic  = clean_topic(agent_folder)
    file_topic   = clean_topic(path.stem)
    ext          = path.suffix.lower()

    # Code files
    if ext in (".ts", ".js", ".py"):
        lang = {"ts": "typescript", "js": "javascript", "py": "python"}.get(ext.lstrip("."), ext.lstrip("."))
        yield make_example(
            f"Show me the implementation of the {agent_topic} agent.",
            f"Here is the {agent_topic} agent:\n\n```{lang}\n{content[:2_000]}\n```",
        )
        return

    if ext == ".md":
        # Example 1: what does this agent do
        yield make_example(
            f"What does the {agent_topic} agent do and how does Maia use it internally?",
            content,
        )
        # Example 2: complex task delegation
        if len(content) >= 200:
            yield make_example(
                f"I need to perform a complex task that requires {agent_topic}. "
                f"How would Maia coordinate this?",
                f"Para esta tarea, Maia activa el agente {agent_topic} internamente:\n\n"
                f"{truncate(content, 2_000)}",
            )
        # Example 3: expected output
        if len(content) >= 400:
            yield make_example(
                f"What is the typical output produced by the {agent_topic} agent?",
                f"The {agent_topic} agent produces the following output pattern:\n\n"
                f"{truncate(content, 2_000)}",
            )
        return

    # Other file types
    yield make_example(
        f"Explain the {agent_topic} agent component: {file_topic}.",
        content,
    )


_LOGIC_CONTEXTS = {
    "n8n":          "n8n workflow automation engine",
    "browser-use":  "browser control and web automation",
    "pc-reasoning": "PC control and system-level interaction",
    "openclaw":     "Openclaw multi-agent system",
    "mcp-protocol": "MCP (Model Context Protocol) tool integration",
}


def examples_logic(path: Path, rel: str) -> Iterator[dict]:
    text = read_file(path)
    if not text:
        return
    content = strip_frontmatter(text)
    if len(content) < MIN_CONTENT_CHARS:
        return

    parts      = rel.split("/")
    logic_type = parts[1] if len(parts) > 1 else ""
    ctx        = _LOGIC_CONTEXTS.get(logic_type, logic_type)
    topic      = clean_topic(path.stem)

    # Example 1: explanation
    yield make_example(
        f"How does {topic} work in the context of {ctx}?",
        content,
    )

    # Example 2: debugging / troubleshooting (needs enough content)
    if len(content) >= 300:
        yield make_example(
            f"There's an issue with {topic} in {ctx}. How would you diagnose it?",
            f"Para diagnosticar un problema con {topic} en {ctx}, analizaría:\n\n"
            f"{truncate(content, 2_000)}",
        )


def examples_workflows(path: Path, rel: str) -> Iterator[dict]:
    ext = path.suffix.lower()

    if ext == ".json":
        text = read_file(path)
        if not text:
            return
        # Strip YAML frontmatter (workflow JSON files may embed it)
        clean = strip_frontmatter(text)
        # Find where the actual JSON starts
        json_start = clean.find("{")
        if json_start == -1:
            return
        clean = clean[json_start:]
        try:
            data = json.loads(clean)
        except json.JSONDecodeError:
            # Try the raw text as fallback
            try:
                data = json.loads(text)
            except json.JSONDecodeError:
                return

        name  = data.get("name") or clean_topic(path.stem)
        desc  = data.get("description", "")
        nodes = data.get("nodes", [])
        node_types = [n.get("type", "") for n in nodes if isinstance(n, dict)][:8]
        node_summary = ", ".join(t for t in node_types if t)

        wf_desc = f"**Workflow:** {name}"
        if desc:
            wf_desc += f"\n**Descripción:** {desc}"
        if node_summary:
            wf_desc += f"\n**Nodos:** {node_summary}"
        wf_desc += f"\n\n```json\n{text[:1_500]}\n```"

        # Example 1: build the workflow
        yield make_example(
            f"Automatiza: {name}. Construye y explica el workflow.",
            wf_desc,
        )
        # Example 2: explain existing workflow
        if len(text) >= 200:
            yield make_example(
                f"Explica cómo funciona el workflow '{name}' paso a paso.",
                f"Este workflow funciona de la siguiente manera:\n\n{wf_desc}",
            )

    elif ext == ".md":
        text = read_file(path)
        if not text:
            return
        content = strip_frontmatter(text)
        if len(content) < MIN_CONTENT_CHARS:
            return
        topic = clean_topic(path.stem)
        yield make_example(
            f"¿Cómo configuro un workflow para {topic}?",
            content,
        )


# ── Main dispatcher ───────────────────────────────────────────────────────────

def generate_examples(path: Path, rel: str) -> Iterator[dict]:
    top = rel.split("/")[0]
    dispatch = {
        "training-prompts": examples_training_prompts,
        "skills":           examples_skills,
        "agents":           examples_agents,
        "logic":            examples_logic,
        "workflows":        examples_workflows,
    }
    fn = dispatch.get(top)
    if fn:
        yield from fn(path, rel)


# ── Entry point ───────────────────────────────────────────────────────────────

def main() -> None:
    if not SKILLS_DIR.is_dir():
        print(f"ERROR: {SKILLS_DIR} not found.", file=sys.stderr)
        sys.exit(1)

    DATASET_DIR.mkdir(parents=True, exist_ok=True)

    all_files = [f for f in SKILLS_DIR.rglob("*") if f.is_file()]
    total     = len(all_files)
    print(f"Procesando {total:,} archivos...", flush=True)

    seen:         set[str]  = set()
    examples:     list[dict] = []
    stats:        dict[str, int] = {}
    skipped_short = 0
    skipped_dupe  = 0

    for idx, f in enumerate(all_files):
        rel = f.relative_to(SKILLS_DIR).as_posix()
        if not is_useful(rel):
            continue

        top = rel.split("/")[0]

        for ex in generate_examples(f, rel):
            asst = ex["messages"][2]["content"]
            if len(asst) < MIN_CONTENT_CHARS:
                skipped_short += 1
                continue
            h = content_hash(asst)
            if h in seen:
                skipped_dupe += 1
                continue
            seen.add(h)
            examples.append(ex)
            stats[top] = stats.get(top, 0) + 1

        if (idx + 1) % 10_000 == 0:
            print(
                f"  {idx+1:,}/{total:,} archivos | {len(examples):,} ejemplos generados...",
                flush=True,
            )

    print(f"\nTotal antes del split : {len(examples):,}")
    print(f"  Omitidos (cortos)    : {skipped_short:,}")
    print(f"  Omitidos (duplicados): {skipped_dupe:,}")
    print("Mezclando con seed=42...", flush=True)

    rng = random.Random(RANDOM_SEED)
    rng.shuffle(examples)

    split_idx = int(len(examples) * TRAIN_RATIO)
    train     = examples[:split_idx]
    val       = examples[split_idx:]

    train_path = DATASET_DIR / "maia_train.jsonl"
    val_path   = DATASET_DIR / "maia_val.jsonl"

    with train_path.open("w", encoding="utf-8") as f:
        for ex in train:
            f.write(json.dumps(ex, ensure_ascii=False) + "\n")

    with val_path.open("w", encoding="utf-8") as f:
        for ex in val:
            f.write(json.dumps(ex, ensure_ascii=False) + "\n")

    print(f"\n{'='*60}")
    print(f"  Train : {len(train):,} ejemplos  →  {train_path.name}")
    print(f"  Val   : {len(val):,} ejemplos  →  {val_path.name}")
    print(f"\nPor categoría:")
    for cat, cnt in sorted(stats.items(), key=lambda x: -x[1]):
        print(f"  {cat:<25}  {cnt:,}")


if __name__ == "__main__":
    main()
