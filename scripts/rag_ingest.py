"""
Luxus O.S  ·  Maia RAG Ingest
------------------------------
Lee `Maia/rag_manifest.jsonl`, trocea el contenido en chunks y los mete
en ChromaDB con embeddings locales de Ollama (modelo `nomic-embed-text`).

Uso:
    # 1) Arranca Ollama y descarga el modelo de embeddings
    ollama pull nomic-embed-text

    # 2) Instala deps
    pip install chromadb requests tqdm

    # 3) Ingesta
    python scripts/rag_ingest.py

Salida:
    Maia/vectordb/   (ChromaDB persistente)
"""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Iterable

import requests
from tqdm import tqdm
import chromadb
from chromadb.config import Settings

REPO_ROOT = Path(__file__).resolve().parent.parent
MANIFEST = REPO_ROOT / "Maia" / "rag_manifest.jsonl"
DB_DIR   = REPO_ROOT / "Maia" / "vectordb"
DB_DIR.mkdir(parents=True, exist_ok=True)

OLLAMA_URL = "http://localhost:11434/api/embeddings"
EMBED_MODEL = "nomic-embed-text"   # 768 dim, rapido, local
COLLECTION = "luxus_os"

CHUNK_CHARS = 1500
CHUNK_OVERLAP = 150
BATCH = 64

HEADING_RE = re.compile(r"^#{1,6}\s", re.MULTILINE)


def split_markdown(text: str) -> list[str]:
    """Split por encabezados; si no hay, por longitud fija."""
    idxs = [m.start() for m in HEADING_RE.finditer(text)]
    if not idxs:
        return split_fixed(text)
    idxs.append(len(text))
    chunks = [text[idxs[i]:idxs[i+1]].strip() for i in range(len(idxs)-1)]
    out = []
    for c in chunks:
        if len(c) <= CHUNK_CHARS:
            out.append(c)
        else:
            out.extend(split_fixed(c))
    return [c for c in out if c.strip()]


def split_fixed(text: str) -> list[str]:
    step = CHUNK_CHARS - CHUNK_OVERLAP
    return [text[i:i+CHUNK_CHARS] for i in range(0, len(text), step) if text[i:i+CHUNK_CHARS].strip()]


def chunk_document(path: Path, text: str) -> list[str]:
    if path.suffix.lower() == ".md":
        return split_markdown(text)
    return split_fixed(text)


def embed_batch(texts: list[str]) -> list[list[float]]:
    """Llamada por lote al endpoint de Ollama."""
    out = []
    for t in texts:
        r = requests.post(OLLAMA_URL, json={"model": EMBED_MODEL, "prompt": t}, timeout=120)
        r.raise_for_status()
        out.append(r.json()["embedding"])
    return out


def iter_manifest() -> Iterable[dict]:
    with MANIFEST.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line:
                yield json.loads(line)


def main():
    if not MANIFEST.exists():
        raise SystemExit(f"Falta {MANIFEST}. Ejecuta antes scripts/build_maia_dataset.py")

    client = chromadb.PersistentClient(path=str(DB_DIR), settings=Settings(anonymized_telemetry=False))
    try:
        client.delete_collection(COLLECTION)
    except Exception:
        pass
    col = client.create_collection(COLLECTION, metadata={"hnsw:space": "cosine"})

    docs = list(iter_manifest())
    print(f"[rag] {len(docs)} documentos a procesar")

    buf_ids, buf_texts, buf_meta = [], [], []
    total_chunks = 0

    for entry in tqdm(docs, desc="ingesta"):
        fp = REPO_ROOT / entry["path"]
        try:
            raw = fp.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue

        for i, chunk in enumerate(chunk_document(fp, raw)):
            buf_ids.append(f"{entry['hash']}_{i}")
            buf_texts.append(chunk)
            buf_meta.append({
                "path": entry["path"],
                "category": entry["category"],
                "label": entry["label"],
                "name": entry["name"],
                "chunk": i,
            })

            if len(buf_texts) >= BATCH:
                embs = embed_batch(buf_texts)
                col.add(ids=buf_ids, documents=buf_texts, metadatas=buf_meta, embeddings=embs)
                total_chunks += len(buf_texts)
                buf_ids.clear(); buf_texts.clear(); buf_meta.clear()

    if buf_texts:
        embs = embed_batch(buf_texts)
        col.add(ids=buf_ids, documents=buf_texts, metadatas=buf_meta, embeddings=embs)
        total_chunks += len(buf_texts)

    print(f"[rag] OK.  {total_chunks:,} chunks indexados en {DB_DIR}")


if __name__ == "__main__":
    main()
