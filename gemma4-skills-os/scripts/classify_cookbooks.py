#!/usr/bin/env python3
"""classify_cookbooks.py — Clasifica mcp-official-servers, anthropic-cookbook,
openai-cookbook y OmniParser en las categorías correctas."""
import re, shutil
from pathlib import Path
from collections import defaultdict

BASE       = Path(__file__).parent.parent
SOURCE_DIR = BASE / "source-repos"
TODAY      = "2026-04-19"

REPOS = {
    "mcp-official-servers": ("https://github.com/modelcontextprotocol/servers",   "MIT"),
    "anthropic-cookbook":   ("https://github.com/anthropics/anthropic-cookbook",  "MIT"),
    "openai-cookbook":      ("https://github.com/openai/openai-cookbook",         "MIT"),
    "OmniParser":           ("https://github.com/microsoft/OmniParser",           "MIT"),
}

BINARY_EXTS = {".png",".jpg",".jpeg",".gif",".svg",".webp",".ico",".mp4",".mp3",
               ".wav",".woff",".woff2",".ttf",".otf",".zip",".tar",".gz",".exe",
               ".dll",".pyc",".db",".sqlite",".pdf",".psd",".map",".npy",".pt",
               ".pth",".bin",".ckpt",".safetensors",".lock",".parquet"}

DISCARD_NAMES = {"package-lock.json","yarn.lock","pnpm-lock.yaml",".env",
                 ".gitignore",".npmignore","tsconfig.json","jest.config.js",
                 "Dockerfile","docker-compose.yml",".eslintrc.js",".prettierrc",
                 "uv.lock","tox.ini","lychee.toml"}

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
    rel  = str(path.relative_to(SOURCE_DIR / repo)).lower().replace("\\","/")
    name = path.name.lower()

    if ext in BINARY_EXTS or name in DISCARD_NAMES: return None
    if is_ci(path): return None
    if ext not in (".md",".txt",".rst",".ipynb",".py",".ts",".js",
                   ".json",".yaml",".yml",".toml",".sh",".mdx",".csv"): return None

    # ── mcp-official-servers ──────────────────────────────────────
    if repo == "mcp-official-servers":
        if "src/filesystem" in rel:   return "conectores-mcp/filesystem"
        if "src/fetch" in rel:        return "conectores-mcp/browser"
        if "src/git" in rel:          return "conectores-mcp/system"
        if "src/memory" in rel:       return "skills/memory"
        if "src/sequentialthinking" in rel: return "skills/reasoning"
        if "src/time" in rel:         return "skills/general"
        if "src/everything" in rel:   return "conectores-mcp/general"
        if ext == ".md":              return "logic/mcp-protocol"
        return "conectores-mcp/general"

    # ── anthropic-cookbook ────────────────────────────────────────
    if repo == "anthropic-cookbook":
        if "elevenlabs" in rel or "tts" in rel:
            if "stt" in rel or "transcri" in rel or "speech_to" in rel: return "plugins/stt"
            return "plugins/tts"
        if "computer" in rel or "desktop" in rel or "screen" in rel: return "agents/pc-control"
        if "vision" in rel or "multimodal" in rel or "image" in rel: return "logic/pc-reasoning"
        if "voice" in rel or "speech" in rel or "audio" in rel:
            if "stt" in rel or "transcri" in rel or "whisper" in rel: return "plugins/stt"
            return "plugins/tts"
        if "capabilities/rag" in rel or "retrieval" in rel:          return "skills/memory"
        if "capabilities/summar" in rel:                              return "skills/reasoning"
        if "capabilities/classif" in rel or "capabilities/text" in rel: return "skills/reasoning"
        if "capabilities/knowledge" in rel:                           return "skills/memory"
        if "skills/" in rel:                                          return "skills/general"
        if "tool_use" in rel:                                         return "skills/coding"
        if "finetuning" in rel:                                       return "training-prompts/system-base"
        if "patterns" in rel or "extended_thinking" in rel:          return "skills/reasoning"
        if "agent" in rel:                                            return "agents/general"
        if "coding" in rel:                                           return "skills/coding"
        if ext == ".md":                                              return "skills/general"
        if ext == ".ipynb":                                           return "skills/general"
        if ext == ".py":                                              return "skills/coding"
        return None

    # ── openai-cookbook ───────────────────────────────────────────
    if repo == "openai-cookbook":
        # Voice / STT
        if any(k in rel for k in ["whisper","transcri","speech_to","stt","asr",
                                   "speech_transcri"]):                return "plugins/stt"
        # TTS
        if any(k in rel for k in ["tts","text_to_speech","voice_solution",
                                   "steering_tts","realtime_api_speech"]):return "plugins/tts"
        # Voice (mixed)
        if "voice_solution" in rel or "voice_translation" in rel:     return "plugins/tts"
        if "app_assistant_voice" in rel:                               return "plugins/tts"
        # Image generation
        if any(k in rel for k in ["dalle","image_gen","generate_image",
                                   "gpt_image","imagegen"]):           return "plugins/image-gen"
        # Video
        if "video" in rel:                                             return "plugins/video"
        # Vision / multimodal → pc-reasoning
        if any(k in rel for k in ["vision","multimodal","gpt4v","gpt-4v",
                                   "tag_caption"]):                    return "logic/pc-reasoning"
        # MCP
        if "mcp" in rel:                                               return "logic/mcp-protocol"
        # Agents SDK
        if "agents_sdk" in rel or "agent" in rel:                     return "agents/general"
        # RAG / memory
        if any(k in rel for k in ["rag","retrieval","embedding","vector",
                                   "pinecone","chroma","weaviate"]):   return "skills/memory"
        # Function calling / tool use
        if any(k in rel for k in ["function_call","tool_use","tool-use"]): return "skills/coding"
        # Reasoning
        if any(k in rel for k in ["chain_of","reasoning","thinking"]):return "skills/reasoning"
        # Coding
        if any(k in rel for k in ["code","coding","github","git","debug"]): return "skills/coding"
        # Web search
        if any(k in rel for k in ["search","browse","web_scraping","crawler"]): return "skills/web-search"
        # General examples
        if ext in (".ipynb",".md"):                                    return "skills/general"
        if ext == ".py":                                               return "skills/coding"
        return None

    # ── OmniParser ────────────────────────────────────────────────
    if repo == "OmniParser":
        # All content → logic/pc-reasoning (screen parsing for GUI agents)
        if ext in (".md",".txt",".py",".ipynb",".sh"):                return "logic/pc-reasoning"
        if ext in (".json",".yaml",".yml",".toml"):                   return "logic/pc-reasoning"
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
    if not repo_dir.is_dir(): print(f"  SKIP {repo}"); continue
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
for cat in sorted(stats): print(f"  {cat:<45} {stats[cat]:>6,}")
