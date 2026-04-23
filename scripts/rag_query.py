"""
Maia RAG Query - utilidad CLI.

Uso:
    python scripts/rag_query.py "como funciona el agent smart-spawn"
    python scripts/rag_query.py --category agents --k 5 "auto agent"
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import requests
import chromadb
from chromadb.config import Settings

REPO_ROOT = Path(__file__).resolve().parent.parent
DB_DIR = REPO_ROOT / "Maia" / "vectordb"
OLLAMA_URL = "http://localhost:11434/api/embeddings"
EMBED_MODEL = "nomic-embed-text"
COLLECTION = "luxus_os"


def embed(text: str) -> list[float]:
    r = requests.post(OLLAMA_URL, json={"model": EMBED_MODEL, "prompt": text}, timeout=60)
    r.raise_for_status()
    return r.json()["embedding"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("query", help="pregunta en lenguaje natural")
    ap.add_argument("--k", type=int, default=8)
    ap.add_argument("--category", default=None,
                    help="filtra por carpeta: skills, agents, workflows, logic, plugins, ...")
    ap.add_argument("--json", action="store_true", help="salida JSON")
    args = ap.parse_args()

    client = chromadb.PersistentClient(path=str(DB_DIR), settings=Settings(anonymized_telemetry=False))
    col = client.get_collection(COLLECTION)

    where = {"category": args.category} if args.category else None
    res = col.query(query_embeddings=[embed(args.query)], n_results=args.k, where=where)

    hits = []
    for i in range(len(res["ids"][0])):
        hits.append({
            "path": res["metadatas"][0][i]["path"],
            "category": res["metadatas"][0][i]["category"],
            "name": res["metadatas"][0][i]["name"],
            "score": 1 - res["distances"][0][i],
            "snippet": res["documents"][0][i][:400],
        })

    if args.json:
        print(json.dumps(hits, ensure_ascii=False, indent=2))
        return

    for h in hits:
        print(f"\n[{h['score']:.3f}] {h['category']}/{h['name']}  ({h['path']})")
        print(h["snippet"][:300].replace("\n", " "))


if __name__ == "__main__":
    main()
