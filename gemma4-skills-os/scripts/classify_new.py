#!/usr/bin/env python3
"""classify_new.py — Clasifica los 8 nuevos repos clonados."""
import re, shutil
from pathlib import Path
from datetime import date
from collections import defaultdict

BASE       = Path(__file__).parent.parent
SOURCE_DIR = BASE / "source-repos"
TODAY      = "2026-04-19"

NEW_REPOS = {
    "awesome-mcp-servers":    ("https://github.com/punkpeye/awesome-mcp-servers",         "MIT"),
    "appcypher-mcp-servers":  ("https://github.com/appcypher/awesome-mcp-servers",         "MIT"),
    "awesome-n8n-templates":  ("https://github.com/enescingoz/awesome-n8n-templates",      "MIT"),
    "n8n-ai-automations":     ("https://github.com/lucaswalter/n8n-ai-automations",        "MIT"),
    "playwright-mcp":         ("https://github.com/microsoft/playwright-mcp",              "Apache-2.0"),
    "fastmcp":                ("https://github.com/PrefectHQ/fastmcp",                     "Apache-2.0"),
    "awesome-claude-skills-2026": ("https://github.com/Samarth0211/awesome-claude-skills-2026", "MIT"),
    "mayurrathi-agent-skills": ("https://github.com/mayurrathi/awesome-agent-skills",      "MIT"),
}

BINARY_EXTS = {".png",".jpg",".jpeg",".gif",".svg",".webp",".ico",".mp4",".mp3",
               ".woff",".woff2",".ttf",".otf",".zip",".tar",".gz",".exe",".dll",
               ".pyc",".db",".sqlite",".pdf",".psd",".map",".lock"}

DISCARD_NAMES = {"package-lock.json","yarn.lock","pnpm-lock.yaml",".env",
                 ".gitignore",".npmignore","tsconfig.json","jest.config.js",
                 "jest.config.ts","vitest.config.ts","webpack.config.js",
                 "Dockerfile","docker-compose.yml",".eslintrc.js",".prettierrc"}

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

def classify_workflow(name, content):
    text = (name + " " + content[:2000]).lower()
    if any(k in text for k in ["email","gmail","mail","smtp","sendgrid"]):        return "workflows/email"
    if any(k in text for k in ["calendar","schedule","gcal","event"]):            return "workflows/calendar"
    if any(k in text for k in ["telegram","slack","discord","notify","alert","webhook"]): return "workflows/notifications"
    if any(k in text for k in ["openai","llm","gpt","claude","anthropic","rag","embedding","ai agent"]): return "workflows/ai-pipelines"
    if any(k in text for k in ["database","sql","csv","sheet","airtable","postgres","mysql"]): return "workflows/data"
    return "workflows/general"

def classify(path, repo):
    ext  = path.suffix.lower()
    rel  = str(path.relative_to(SOURCE_DIR / repo)).lower()
    name = path.name.lower()

    if ext in BINARY_EXTS or name in DISCARD_NAMES: return None
    if is_ci(path): return None

    # ── Reglas específicas por repo ────────────��─────────────────
    if repo in ("awesome-mcp-servers","appcypher-mcp-servers","fastmcp"):
        if ext == ".md": return "logic/mcp-protocol"
        if ext in (".ts",".py",".js") and ("docs/" in rel or "readme" in name): return "logic/mcp-protocol"
        if ext in (".json",".yaml",".yml",".toml") and name not in DISCARD_NAMES: return "conectores-mcp/general"
        return None

    if repo == "playwright-mcp":
        if ext == ".md": return "conectores-mcp/browser"
        if ext in (".ts",".js",".json") and name not in DISCARD_NAMES: return "conectores-mcp/browser"
        return None

    if repo in ("awesome-n8n-templates","n8n-ai-automations"):
        if ext == ".json":
            content = read_safe(path) or ""
            return classify_workflow(name, content)
        if ext == ".md": return "workflows/ai-pipelines" if repo == "n8n-ai-automations" else "skills/general"
        return None

    if repo in ("awesome-claude-skills-2026","mayurrathi-agent-skills"):
        if ext in (".md",".txt"):
            c = rel
            if any(k in c for k in ["agent","orchestrat","multi-agent","supervisor"]): return "agents/general"
            if any(k in c for k in ["pc-control","screen","desktop","computer-use"]):  return "agents/pc-control"
            if any(k in c for k in ["research","investigat","deep-research"]):         return "agents/research"
            if any(k in c for k in ["design","ui","ux","figma","css"]):                return "agents/design"
            if any(k in c for k in ["voice","tts","stt","speech"]):                    return "plugins/tts"
            if any(k in c for k in ["image","dalle","flux","midjourney","sd"]):        return "plugins/image-gen"
            if any(k in c for k in ["mcp","connector","tool-use"]):                    return "conectores-mcp/general"
            if any(k in c for k in ["memory","context","history","recall"]):           return "skills/memory"
            if any(k in c for k in ["reason","chain","thinking","analysis"]):          return "skills/reasoning"
            if any(k in c for k in ["coding","code","debug","refactor","test","git"]): return "skills/coding"
            if any(k in c for k in ["search","browse","web","scraping"]):              return "skills/web-search"
            return "skills/general"
        if ext in (".py",".ts",".js",".json",".yaml",".yml"):
            return "skills/coding"
        return None

    return None

stats   = defaultdict(int)
seen    = {}
total   = 0

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
    # Split if >500KB
    enc = full.encode("utf-8")
    if len(enc) > 500_000:
        stem2, ext2 = Path(fname).stem, Path(fname).suffix
        for i, chunk in enumerate([ enc[j:j+500_000] for j in range(0,len(enc),500_000) ], 1):
            (dest_dir / f"{stem2}_part{i}{ext2}").write_text(chunk.decode("utf-8","replace"), encoding="utf-8")
            stats[dest_cat] += 1; total += 1
    else:
        (dest_dir / fname).write_text(full, encoding="utf-8")
        stats[dest_cat] += 1; total += 1

for repo, (url, lic) in NEW_REPOS.items():
    repo_dir = SOURCE_DIR / repo
    if not repo_dir.is_dir(): print(f"  SKIP {repo} (not found)"); continue
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
for repo in NEW_REPOS:
    for lname in ("LICENSE","LICENSE.txt","LICENSE.md","LICENCE","COPYING"):
        lp = SOURCE_DIR / repo / lname
        if lp.exists():
            shutil.copy2(lp, lic_dir / f"{repo}-LICENSE.txt")
            break

print(f"\nTotal nuevos archivos añadidos: {total:,}")
print("\nPor carpeta destino:")
for cat in sorted(stats): print(f"  {cat:<45} {stats[cat]:>6,}")
