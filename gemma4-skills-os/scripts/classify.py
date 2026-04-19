#!/usr/bin/env python3
"""
classify.py — Clasifica y copia archivos de source-repos/ al dataset Gemma 4 Luxus-OS.
Filosofía maximalista: incluir todo salvo binarios, configs de build y jailbreaks.
"""

import os
import re
import sys
import shutil
import hashlib
import logging
from pathlib import Path
from datetime import date
from collections import defaultdict

# ─── Rutas ────────────────────────────────────────────────────────────────────
BASE_DIR    = Path(__file__).parent.parent
SOURCE_DIR  = BASE_DIR / "source-repos"
SCRIPTS_DIR = BASE_DIR / "scripts"
LOG_FILE    = SCRIPTS_DIR / "classify.log"

TODAY = date.today().isoformat()

# ─── Metadatos por repo ───────────────────────────────────────────────────────
REPO_META = {
    "volt-agent-skills":   ("https://github.com/VoltAgent/awesome-agent-skills",            "MIT"),
    "antigravity-skills":  ("https://github.com/sickn33/antigravity-awesome-skills",        "MIT"),
    "ruflo":               ("https://github.com/ruvnet/ruflo",                              "MIT"),
    "superpowers":         ("https://github.com/obra/superpowers",                          "MIT"),
    "stitch-mcp":          ("https://github.com/Kargatharaakash/stitch-mcp",               "MIT"),
    "aionui":              ("https://github.com/iOfficeAI/AionUi",                          "MIT"),
    "everything-claude":   ("https://github.com/affaan-m/everything-claude-code",           "MIT"),
    "n8n-source":          ("https://github.com/n8n-io/n8n",                               "Apache-2.0"),
    "m3-catalog":          ("https://github.com/meticha/material-3-expressive-catalog",     "Apache-2.0"),
    "beercss":             ("https://github.com/beercss/beercss",                           "MIT"),
    "ui-ux-skill":         ("https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",     "MIT"),
    "claude-mem":          ("https://github.com/thedotmack/claude-mem",                    "MIT"),
    "browser-use":         ("https://github.com/browser-use/browser-use",                  "MIT"),
    "notebooklm":          ("https://github.com/teng-lin/notebooklm-py",                   "MIT"),
    "composio-skills":     ("https://github.com/ComposioHQ/awesome-claude-skills",         "Apache-2.0"),
    "agency-agents":       ("https://github.com/msitarzewski/agency-agents",               "MIT"),
    "n8n-workflows":       ("https://github.com/Zie619/n8n-workflows",                     "MIT"),
    "prompts-leaks-1":     ("https://github.com/asgeirtj/system_prompts_leaks",            "Educational"),
    "prompts-leaks-2":     ("https://github.com/jujumilk3/leaked-system-prompts",          "Educational"),
    "openclaw":            ("https://github.com/openclaw/openclaw",                        "Apache-2.0"),
}

# ─── Extensiones binarias a descartar ─────────────────────────────────────────
BINARY_EXTS = {
    ".png", ".jpg", ".jpeg", ".gif", ".bmp", ".tiff", ".webp", ".ico",
    ".mp4", ".avi", ".mov", ".mkv", ".webm", ".wmv",
    ".mp3", ".wav", ".ogg", ".flac", ".aac", ".m4a",
    ".woff", ".woff2", ".ttf", ".otf", ".eot",
    ".zip", ".tar", ".gz", ".tgz", ".bz2", ".xz", ".rar", ".7z",
    ".exe", ".dll", ".node", ".bin", ".so", ".dylib", ".lib",
    ".class", ".jar", ".pyc", ".pyo",
    ".db", ".sqlite", ".sqlite3",
    ".pdf", ".docx", ".xlsx", ".pptx", ".odt",
    ".psd", ".ai", ".sketch", ".fig",
    ".map",
}

# ─── Nombres de archivo a descartar ───────────────────────────────────────────
DISCARD_NAMES = {
    "package-lock.json", "yarn.lock", "pnpm-lock.yaml",
    ".env", ".env.example", ".env.local", ".env.test", ".env.production", ".env.development",
    ".gitignore", ".npmignore", ".dockerignore", ".eslintignore",
    "tsconfig.json", "tsconfig.build.json", "tsconfig.node.json",
    "webpack.config.js", "webpack.config.ts",
    "Dockerfile", "docker-compose.yml", "docker-compose.yaml",
    ".prettierrc", ".prettierrc.js", ".prettierrc.json",
    ".eslintrc.js", ".eslintrc.json", ".eslintrc.cjs", ".eslintrc.yml",
    "jest.config.js", "jest.config.ts", "vitest.config.ts", "vitest.config.js",
    "rollup.config.js", "vite.config.ts", "vite.config.js",
    "babel.config.js", "babel.config.json", ".babelrc",
    "nx.json", "lerna.json", ".nvmrc", ".node-version",
    ".editorconfig", ".gitattributes",
}

# ─── Patrones de jailbreak ────────────────────────────────────────────────────
JAILBREAK_RE = re.compile(
    r"\bDAN\b|jailbreak|ignore (your|all|previous) (instructions|rules|guidelines)|"
    r"you are now (a )?DAN|pretend you (have no|don.t have)|"
    r"bypass.{0,40}(safety|filter|restriction|guard)|"
    r"act as if you have no restrictions|forget (your|all|previous) (training|instructions)|"
    r"evil (mode|ai|bot)|developer mode enabled|"
    r"disregard (your|all|previous|safety) (rules|instructions|guidelines|restrictions)|"
    r"you are not claude|you are not bound by|no[ -]restrictions? mode|"
    r"STAN\b|DUDE\b|AIM mode|ANTI-DAN",
    re.IGNORECASE,
)

# ─── Palabras clave de clasificación ──────────────────────────────────────────
CATEGORY_KEYWORDS = {
    "skills/coding": [
        "coding", "code", "debug", "refactor", "testing", "devops", "programming",
        "develop", "engineer", "typescript", "python", "rust", "golang", "backend",
        "frontend", "api", "database", "sql", "git", "deploy", "ci-cd", "linting",
        "architecture", "design-pattern", "solid", "microservice", "kubernetes",
        "docker", "terraform", "ansible", "bash", "shell-script",
    ],
    "skills/reasoning": [
        "reason", "chain-of-thought", "cot", "thinking", "analysis", "analys",
        "problem-solving", "logic", "critical-thinking", "decision", "evaluate",
        "planning", "planning-agent", "structured-output", "reflection",
    ],
    "skills/web-search": [
        "search", "web-search", "scraping", "research", "browse", "internet",
        "query", "retrieval", "crawler", "tavily", "serper", "bing", "google-search",
        "perplexity", "exa", "brave-search",
    ],
    "skills/memory": [
        "memory", "persistent", "context", "history", "recall", "remember",
        "episodic", "semantic", "mem0", "memgpt", "long-term", "vector-store",
        "embedding", "chroma", "pinecone", "qdrant", "weaviate",
    ],
    "skills/files": [
        "pdf", "document", "extract", "parse", "ocr", "spreadsheet",
        "file-read", "file-write", "csv", "excel", "conversion", "attachment",
        "markitdown", "unstructured",
    ],
    "skills/design": [
        "design", "ui", "ux", "material", "css", "figma", "tailwind",
        "component", "theme", "color", "typography", "beercss", "material-3",
        "expressive", "flutter", "swift-ui", "jetpack", "sketch",
    ],
    "skills/voice": [
        "voice", "speech", "audio", "tts", "stt", "listen", "speak",
        "elevenlabs", "openai-tts", "whisper", "deepgram", "transcrib",
        "vocal", "command-by-voice",
    ],
    "agents/pc-control": [
        "pc-control", "screen", "keyboard", "mouse", "computer-use",
        "computer_use", "desktop", "pyautogui", "gui-agent", "ui-automation",
        "accessibility", "vnc", "rdp", "playwright-desktop",
    ],
    "agents/orchestrator": [
        "orchestrat", "coordinator", "multi-agent", "supervisor",
        "swarm", "crew-ai", "autogen", "langgraph", "handoff", "delegation",
    ],
    "agents/research": [
        "research-agent", "investigat", "deep-research", "survey",
        "scientific", "academic", "literature-review",
    ],
    "agents/automation": [
        "automat", "workflow", "pipeline", "schedule", "trigger",
        "zapier", "make", "integromat", "robotic-process",
    ],
    "agents/design": [
        "design-agent", "generative-ui", "ui-generator", "style-guide",
        "wireframe", "prototype-gen",
    ],
    "conectores-mcp/filesystem": [
        "filesystem", "file-system", "mcp-fs", "directory-access",
    ],
    "conectores-mcp/browser": [
        "mcp-browser", "browser-mcp", "puppeteer-mcp", "playwright-mcp",
        "web-mcp",
    ],
    "conectores-mcp/google-workspace": [
        "google-workspace", "gmail-mcp", "drive-mcp", "calendar-mcp",
        "google-docs-mcp",
    ],
    "conectores-mcp/system": [
        "system-mcp", "shell-mcp", "terminal-mcp", "os-mcp",
    ],
    "plugins/image-gen": [
        "image-gen", "flux", "stable-diffusion", "dall-e", "dalle",
        "midjourney", "comfyui", "image-generation",
    ],
    "plugins/presentation": [
        "presentation", "powerpoint", "pptx", "slides", "infographic",
        "keynote", "reveal-js",
    ],
    "plugins/tts": [
        "tts", "text-to-speech", "elevenlabs", "openai-tts",
        "bark", "coqui",
    ],
    "plugins/stt": [
        "stt", "speech-to-text", "whisper", "transcrib", "deepgram",
    ],
    "plugins/video": [
        "video-gen", "kling", "sora", "runway", "pika", "ffmpeg",
        "video-generation",
    ],
    "logic/mcp-protocol": [
        "mcp-protocol", "model-context-protocol", "modelcontextprotocol",
        "mcp-specification",
    ],
    "logic/pc-reasoning": [
        "pc-reasoning", "screen-reasoning", "visual-reasoning",
        "ui-understanding", "screen-grounding",
    ],
}

# ─── Clasificación de workflows por contenido ─────────────────────────────────
def classify_workflow(name: str, content: str) -> str:
    text = (name + " " + content[:2000]).lower()
    if any(k in text for k in ["email", "gmail", "mail", "smtp", "inbox", "outlook", "sendgrid"]):
        return "workflows/email"
    if any(k in text for k in ["calendar", "event", "schedule", "gcal", "google calendar", "outlook calendar"]):
        return "workflows/calendar"
    if any(k in text for k in ["notification", "alert", "telegram", "slack", "discord", "webhook", "push", "notify"]):
        return "workflows/notifications"
    if any(k in text for k in ["openai", "llm", "gpt", "claude", "gemini", "chatgpt", "anthropic",
                                 "ai pipeline", "rag", "embedding", "langchain", "llamaindex", "vector"]):
        return "workflows/ai-pipelines"
    if any(k in text for k in ["database", "sql", "csv", "excel", "sheet", "postgres", "mysql",
                                 "airtable", "google sheet", "data", "etl", "extract", "transform"]):
        return "workflows/data"
    return "workflows/general"


def slugify(text: str) -> str:
    text = text.lower()
    text = re.sub(r"[^a-z0-9._-]", "-", text)
    text = re.sub(r"-{2,}", "-", text)
    return text.strip("-")


def read_safe(path: Path) -> str | None:
    for enc in ("utf-8", "utf-8-sig", "latin-1", "cp1252"):
        try:
            return path.read_text(encoding=enc)
        except (UnicodeDecodeError, ValueError):
            continue
    return None


def make_frontmatter(repo: str, src_file: str, license_: str, category: str) -> str:
    url, _ = REPO_META.get(repo, ("unknown", "unknown"))
    return (
        f"---\n"
        f"source_repo: {url}\n"
        f"source_file: {src_file}\n"
        f"license: {license_}\n"
        f"category: {category}\n"
        f"imported_at: {TODAY}\n"
        f"---\n\n"
    )


def is_ci_workflow(path: Path) -> bool:
    parts = path.parts
    return ".github" in parts and "workflows" in parts


def is_binary(path: Path) -> bool:
    return path.suffix.lower() in BINARY_EXTS


def is_discard_config(path: Path) -> bool:
    return path.name in DISCARD_NAMES


def classify_path(path: Path, repo_name: str) -> str | None:
    """
    Returns destination subcategory (relative to BASE_DIR) or None to discard.
    """
    rel = path.relative_to(SOURCE_DIR / repo_name)
    rel_str = str(rel).lower().replace("\\", "/")
    fname = path.name.lower()
    ext = path.suffix.lower()

    # ── n8n-source y openclaw: solo .md ──────────────────────────────────────
    if repo_name in ("n8n-source", "openclaw"):
        if ext != ".md":
            return None
        if repo_name == "n8n-source":
            return "logic/n8n"
        return "logic/openclaw"

    # ── n8n-workflows: solo JSON → workflows/ ────────────────────────────────
    if repo_name == "n8n-workflows":
        if ext == ".json":
            content = read_safe(path) or ""
            return classify_workflow(fname, content)
        if ext in (".md", ".txt"):
            return "skills/general"
        return None

    # ── prompts-leaks → training-prompts/system-base/ ────────────────────────
    if repo_name in ("prompts-leaks-1", "prompts-leaks-2"):
        if ext not in (".md", ".txt", ".json", ".yaml", ".yml"):
            return None
        content = read_safe(path)
        if content is None:
            return None
        if JAILBREAK_RE.search(content[:6000]):
            return "DISCARD_JAILBREAK"
        return "training-prompts/system-base"

    # ── browser-use: documentación + README, no código ejecutable ────────────
    if repo_name == "browser-use":
        if ext in (".md", ".rst", ".txt"):
            return "logic/browser-use"
        if ext in (".py", ".ts", ".js"):
            if "docs/" in rel_str or "doc/" in rel_str:
                return "logic/browser-use"
            return None
        if ext in (".json", ".yaml", ".yml", ".toml"):
            if fname not in DISCARD_NAMES:
                return "logic/browser-use"
        return None

    # ── stitch-mcp → conectores-mcp/general ──────────────────────────────────
    if repo_name == "stitch-mcp":
        if ext in (".md", ".txt", ".json", ".yaml", ".yml", ".ts", ".py", ".js"):
            return "conectores-mcp/general"
        return None

    # ── Resto de repos: clasificación por contenido/ruta ─────────────────────
    # Identificar por palabras clave en la ruta
    combined = rel_str + " " + fname

    # MCP connectors
    mcp_signals = ["mcp/", "/mcp-", "-mcp", "mcp_server", "mcp-server", "modelcontextprotocol"]
    if any(s in combined for s in mcp_signals):
        if any(k in combined for k in ["filesystem", "file-system"]):
            return "conectores-mcp/filesystem"
        if any(k in combined for k in ["browser", "puppeteer", "playwright"]):
            return "conectores-mcp/browser"
        if any(k in combined for k in ["google", "workspace", "gmail", "gdrive"]):
            return "conectores-mcp/google-workspace"
        if any(k in combined for k in ["system", "shell", "terminal", "os/"]):
            return "conectores-mcp/system"
        return "conectores-mcp/general"

    # AGENTS.md, AGENT.md
    if fname in ("agents.md", "agent.md") or "/agents/" in rel_str or "/agent/" in rel_str:
        return "agents/general"

    # SKILL.md u otras en /skills/
    if fname == "skill.md" or "/skills/" in rel_str or "/skill/" in rel_str:
        # Sub-classify by keyword
        for cat, keywords in CATEGORY_KEYWORDS.items():
            if cat.startswith("skills/"):
                if any(k in combined for k in keywords):
                    return cat
        return "skills/general"

    # Specific category matches
    for cat, keywords in CATEGORY_KEYWORDS.items():
        if any(k in combined for k in keywords):
            return cat

    # Fallback by extension
    if ext in (".md", ".txt", ".rst", ".mdx"):
        return "skills/general"
    if ext == ".json":
        # Could be workflow or agent config
        if "workflow" in combined or "n8n" in combined:
            return "workflows/general"
        return "agents/general"
    if ext in (".yaml", ".yml", ".toml"):
        return "agents/general"
    if ext in (".py", ".ts", ".js", ".mjs", ".cjs", ".tsx", ".jsx"):
        return "skills/coding"
    if ext in (".sh", ".bash", ".zsh"):
        return "skills/coding"
    if ext in (".css", ".scss", ".less"):
        return "skills/design"
    if ext in (".html", ".htm", ".vue", ".svelte"):
        return "skills/design"
    if ext in (".csv", ".jsonl"):
        return "skills/files"
    if ext in (".xml", ".xsd"):
        return "skills/general"
    if ext in (".go", ".rs", ".java", ".kt", ".swift", ".c", ".cpp", ".h"):
        return "skills/coding"

    return None


def get_dest_filename(src_path: Path, repo_name: str, seen: dict) -> str:
    """Generate unique, slugified destination filename with repo suffix for deduplication."""
    stem = slugify(src_path.stem)
    ext = src_path.suffix.lower() or ".txt"
    # Always append repo name to avoid collisions across repos
    base = f"{stem}_{repo_name}{ext}"
    key = base
    if key in seen:
        seen[key] += 1
        base = f"{stem}_{repo_name}_{seen[key]}{ext}"
    else:
        seen[key] = 0
    return base


def split_content(content: str, max_bytes: int = 500_000) -> list[str]:
    """Split content into chunks of max_bytes bytes."""
    encoded = content.encode("utf-8")
    if len(encoded) <= max_bytes:
        return [content]
    parts = []
    start = 0
    while start < len(encoded):
        chunk = encoded[start: start + max_bytes]
        parts.append(chunk.decode("utf-8", errors="replace"))
        start += max_bytes
    return parts


# ─── Contadores y logs ────────────────────────────────────────────────────────
stats = {
    "total_source": 0,
    "included": 0,
    "discarded_binary": 0,
    "discarded_config": 0,
    "discarded_ci": 0,
    "discarded_jailbreak": 0,
    "discarded_no_match": 0,
    "discarded_unreadable": 0,
    "split_files": 0,
}
by_dest: dict[str, int] = defaultdict(int)

logging.basicConfig(
    filename=str(LOG_FILE),
    filemode="w",
    level=logging.INFO,
    format="%(levelname)s %(message)s",
)


def process_repo(repo_name: str, seen_names: dict) -> None:
    repo_dir = SOURCE_DIR / repo_name
    if not repo_dir.is_dir():
        logging.warning(f"Repo not found: {repo_name}")
        return

    url, license_ = REPO_META.get(repo_name, ("unknown", "unknown"))

    for src_path in repo_dir.rglob("*"):
        if not src_path.is_file():
            continue

        stats["total_source"] += 1

        # ── Filtros de descarte ───────────────────────────────────────────────
        if is_binary(src_path):
            stats["discarded_binary"] += 1
            continue

        if is_discard_config(src_path):
            stats["discarded_config"] += 1
            continue

        if is_ci_workflow(src_path):
            stats["discarded_ci"] += 1
            continue

        # ── Clasificar ────────────────────────────────────────────────────────
        dest_cat = classify_path(src_path, repo_name)

        if dest_cat is None:
            stats["discarded_no_match"] += 1
            continue

        if dest_cat == "DISCARD_JAILBREAK":
            stats["discarded_jailbreak"] += 1
            logging.info(f"JAILBREAK: {src_path}")
            continue

        # ── Leer contenido ────────────────────────────────────────────────────
        content = read_safe(src_path)
        if content is None:
            stats["discarded_unreadable"] += 1
            continue

        # ── Destino ───────────────────────────────────────────────────────────
        dest_dir = BASE_DIR / dest_cat
        dest_dir.mkdir(parents=True, exist_ok=True)

        rel_from_repo = str(src_path.relative_to(SOURCE_DIR / repo_name))
        frontmatter = make_frontmatter(repo_name, rel_from_repo, license_, dest_cat)

        dest_fname = get_dest_filename(src_path, repo_name, seen_names)

        # Special rename for prompts-leaks
        if repo_name in ("prompts-leaks-1", "prompts-leaks-2"):
            origin_tag = "asgeirtj" if repo_name == "prompts-leaks-1" else "jujumilk3"
            slug_name = slugify(src_path.stem)
            dest_fname = f"leak_{origin_tag}_{slug_name}_{repo_name}.md"

        # ── Dividir si > 500KB ────────────────────────────────────────────────
        full_content = frontmatter + content
        parts = split_content(full_content)

        if len(parts) > 1:
            stats["split_files"] += 1
            stem_nd = Path(dest_fname).stem
            ext_nd = Path(dest_fname).suffix
            for i, part_content in enumerate(parts, 1):
                part_fname = f"{stem_nd}_part{i}{ext_nd}"
                dest_path = dest_dir / part_fname
                dest_path.write_text(part_content, encoding="utf-8")
                stats["included"] += 1
                by_dest[dest_cat] += 1
        else:
            dest_path = dest_dir / dest_fname
            dest_path.write_text(full_content, encoding="utf-8")
            stats["included"] += 1
            by_dest[dest_cat] += 1


def copy_licenses() -> None:
    dest_dir = BASE_DIR / "licenses"
    dest_dir.mkdir(exist_ok=True)
    for repo_name in REPO_META:
        repo_dir = SOURCE_DIR / repo_name
        for lname in ("LICENSE", "LICENSE.txt", "LICENSE.md", "LICENCE", "COPYING"):
            lpath = repo_dir / lname
            if lpath.exists():
                shutil.copy2(lpath, dest_dir / f"{repo_name}-LICENSE.txt")
                break


def print_report() -> None:
    total_disc = (
        stats["discarded_binary"]
        + stats["discarded_config"]
        + stats["discarded_ci"]
        + stats["discarded_jailbreak"]
        + stats["discarded_no_match"]
        + stats["discarded_unreadable"]
    )
    print("\n" + "=" * 60)
    print("REPORTE FINAL — Gemma 4 Luxus-OS Dataset")
    print("=" * 60)
    print(f"\nTotal archivos en source-repos/: {stats['total_source']:,}")
    print(f"Total clasificados e incluidos:  {stats['included']:,}")
    print(f"Total descartados:               {total_disc:,}")
    print(f"  ├─ Binarios:                   {stats['discarded_binary']:,}")
    print(f"  ├─ Config/build:               {stats['discarded_config']:,}")
    print(f"  ├─ CI/CD workflows:            {stats['discarded_ci']:,}")
    print(f"  ├─ Jailbreaks:                 {stats['discarded_jailbreak']:,}")
    print(f"  ├─ Sin categoría:              {stats['discarded_no_match']:,}")
    print(f"  └─ No legibles:                {stats['discarded_unreadable']:,}")
    print(f"\nArchivos divididos (>500KB):     {stats['split_files']:,}")
    print("\nPor carpeta destino:")
    for cat in sorted(by_dest):
        print(f"  {cat:<45} {by_dest[cat]:>6,}")
    print("\nLicencias detectadas por repo:")
    for repo, (url, lic) in REPO_META.items():
        print(f"  {repo:<30} {lic}")
    print("=" * 60)


if __name__ == "__main__":
    seen_names: dict[str, int] = {}

    print(f"[+] Iniciando clasificación desde {SOURCE_DIR}")
    print(f"[+] Destino: {BASE_DIR}")
    print(f"[+] Repos a procesar: {list(REPO_META.keys())}")
    print()

    for repo in REPO_META:
        print(f"  → Procesando {repo}...")
        process_repo(repo, seen_names)
        print(f"     incluidos hasta ahora: {stats['included']:,}")

    print("\n[+] Copiando licencias...")
    copy_licenses()

    print_report()

    # Escribir reporte a fichero
    report_path = SCRIPTS_DIR / "classification_report.txt"
    import io, contextlib
    with open(report_path, "w") as f:
        with contextlib.redirect_stdout(f):
            print_report()

    print(f"\n[+] Reporte guardado en {report_path}")
    print(f"[+] Log detallado en {LOG_FILE}")
