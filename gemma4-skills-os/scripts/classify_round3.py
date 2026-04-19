#!/usr/bin/env python3
"""classify_round3.py — Clasifica awesome-openclaw-skills, awesome-openclaw-agents,
google-workspace-mcp (taylorwilsdon) y google-workspace-mcp2 (aaronsb)."""
import re, shutil
from pathlib import Path
from collections import defaultdict

BASE       = Path(__file__).parent.parent
SOURCE_DIR = BASE / "source-repos"
TODAY      = "2026-04-19"

REPOS = {
    "awesome-openclaw-skills":  ("https://github.com/VoltAgent/awesome-openclaw-skills",      "MIT"),
    "awesome-openclaw-agents":  ("https://github.com/mergisi/awesome-openclaw-agents",        "MIT"),
    "google-workspace-mcp":     ("https://github.com/taylorwilsdon/google_workspace_mcp",     "MIT"),
    "google-workspace-mcp2":    ("https://github.com/aaronsb/google-workspace-mcp",           "MIT"),
}

BINARY_EXTS = {".png",".jpg",".jpeg",".gif",".svg",".webp",".ico",".mp4",".mp3",
               ".wav",".woff",".woff2",".ttf",".otf",".zip",".tar",".gz",".exe",
               ".dll",".pyc",".db",".sqlite",".pdf",".psd",".map",".lock",
               ".npy",".pt",".pth",".bin",".ckpt",".safetensors",".parquet"}

DISCARD_NAMES = {"package-lock.json","yarn.lock","pnpm-lock.yaml",".env",
                 ".gitignore",".npmignore","tsconfig.json","jest.config.js",
                 "jest.config.ts","jest.config.cjs","vitest.config.ts",
                 "webpack.config.js","Dockerfile","docker-compose.yml",
                 ".eslintrc.js",".eslintrc.json",".prettierrc","uv.lock",
                 "tox.ini","lychee.toml","Makefile","coverage-baseline.json"}

def slugify(t):
    t = t.lower()
    t = re.sub(r"[^a-z0-9._-]", "-", t)
    t = re.sub(r"-{2,}", "-", t)
    return t.strip("-")

def read_safe(p):
    for enc in ("utf-8","utf-8-sig","latin-1"):
        try: return p.read_text(encoding=enc)
        except: pass
    return None

def is_ci(p):
    parts = p.parts
    return ".github" in parts and "workflows" in parts

def classify(path, repo):
    ext  = path.suffix.lower()
    rel  = str(path.relative_to(SOURCE_DIR / repo)).lower().replace("\\", "/")
    name = path.name.lower()

    if ext in BINARY_EXTS or name in DISCARD_NAMES: return None
    if is_ci(path): return None

    # ── awesome-openclaw-skills ───────────────────────────────────────
    if repo == "awesome-openclaw-skills":
        if ext not in (".md", ".txt", ".json", ".yaml", ".yml"): return None
        # Category files
        if "speech" in rel or "transcri" in rel or "stt" in rel or "voice" in rel:
            return "plugins/stt"
        if "image" in rel or "video-gen" in rel or "generation" in rel:
            return "plugins/image-gen"
        if "coding" in rel or "ide" in rel or "git-and" in rel or "devops" in rel:
            return "skills/coding"
        if "search" in rel or "research" in rel or "browser" in rel:
            return "skills/web-search"
        if "data-and" in rel or "analytics" in rel:
            return "skills/coding"
        if "calendar" in rel or "scheduling" in rel:
            return "workflows/calendar"
        if "self-hosted" in rel or "automation" in rel:
            return "conectores-mcp/general"
        # All other categories → skills/general
        return "skills/general"

    # ── awesome-openclaw-agents ───────────────────────────────────────
    if repo == "awesome-openclaw-agents":
        if ext not in (".md", ".txt", ".json"): return None
        # SOUL.md and README.md files in agent dirs → route by parent category
        if "voice" in rel: return "plugins/tts"
        if "development" in rel or "coding" in rel or "devops" in rel: return "skills/coding"
        if "data" in rel: return "skills/coding"
        if "research" in rel or "investigat" in rel: return "agents/research"
        if "design" in rel or "creative" in rel: return "agents/general"
        if "pc-control" in rel or "computer" in rel or "desktop" in rel: return "agents/pc-control"
        # All other agent categories
        return "agents/general"

    # ── google-workspace-mcp (taylorwilsdon — Python) ─────────────────
    if repo == "google-workspace-mcp":
        if ext in (".py", ".md", ".txt", ".rst", ".yaml", ".yml", ".toml", ".sh"):
            if name in DISCARD_NAMES: return None
            return "conectores-mcp/google-workspace"
        return None

    # ── google-workspace-mcp2 (aaronsb — TypeScript) ──────────────────
    if repo == "google-workspace-mcp2":
        if name in DISCARD_NAMES: return None
        if ext in (".ts", ".js"):
            # skip test files
            if ".spec." in name or ".test." in name: return None
            return "conectores-mcp/google-workspace"
        if ext == ".md":
            # Architecture docs → mcp-protocol
            if "docs/architecture" in rel or "docs/scripts" in rel or ".claude" in rel:
                return "logic/mcp-protocol"
            return "conectores-mcp/google-workspace"
        if ext in (".json", ".yaml", ".yml") and name not in DISCARD_NAMES:
            return "conectores-mcp/google-workspace"
        return None

    return None


stats = defaultdict(int)
seen  = {}
total = 0

def write_file(dest_cat, src_path, repo, url, lic):
    global total
    content = read_safe(src_path)
    if content is None: return

    rel = str(src_path.relative_to(SOURCE_DIR / repo))
    fm  = (f"---\nsource_repo: {url}\nsource_file: {rel}\n"
           f"license: {lic}\ncategory: {dest_cat}\nimported_at: {TODAY}\n---\n\n")

    stem = slugify(src_path.stem)
    ext  = src_path.suffix.lower() or ".txt"
    key  = f"{stem}_{repo}{ext}"
    if key in seen:
        seen[key] += 1
        fname = f"{stem}_{repo}_{seen[key]}{ext}"
    else:
        seen[key] = 0
        fname = key

    dest_dir = BASE / dest_cat
    dest_dir.mkdir(parents=True, exist_ok=True)

    full = fm + content
    enc  = full.encode("utf-8")
    if len(enc) > 500_000:
        s2, e2 = Path(fname).stem, Path(fname).suffix
        for i, chunk in enumerate([enc[j:j+500_000] for j in range(0,len(enc),500_000)], 1):
            (dest_dir / f"{s2}_part{i}{e2}").write_text(
                chunk.decode("utf-8","replace"), encoding="utf-8")
            stats[dest_cat] += 1; total += 1
    else:
        (dest_dir / fname).write_text(full, encoding="utf-8")
        stats[dest_cat] += 1; total += 1


for repo, (url, lic) in REPOS.items():
    repo_dir = SOURCE_DIR / repo
    if not repo_dir.is_dir():
        print(f"  SKIP {repo} (not found)"); continue
    count = 0
    for src in repo_dir.rglob("*"):
        if not src.is_file(): continue
        cat = classify(src, repo)
        if cat:
            write_file(cat, src, repo, url, lic)
            count += 1
    print(f"  {repo}: {count} archivos incluidos")

# Copy licences
lic_dir = BASE / "licenses"
lic_dir.mkdir(exist_ok=True)
for repo in REPOS:
    for lname in ("LICENSE","LICENSE.txt","LICENSE.md","LICENCE","COPYING"):
        lp = SOURCE_DIR / repo / lname
        if lp.exists():
            shutil.copy2(lp, lic_dir / f"{repo}-LICENSE.txt")
            break

print(f"\nTotal nuevos archivos: {total:,}")
print("\nPor carpeta destino:")
for cat in sorted(stats):
    print(f"  {cat:<45} {stats[cat]:>6,}")
