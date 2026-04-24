"""
Luxus O.S  ·  Maia RAG Server
------------------------------
Servidor HTTP persistente que mantiene ChromaDB + el cliente de embeddings
cargados en memoria. Evita el overhead de arrancar Python + Chroma en cada
query (el subprocess de maia-brain.ts tarda ~1-2 s por consulta, este tarda
20-50 ms).

Usa solo stdlib (http.server) para no añadir dependencias. El cliente de
Chroma y la libreria requests ya estan en scripts/requirements.txt.

Uso:
    python3 scripts/rag_server.py                  # escucha en :8765
    python3 scripts/rag_server.py --port 8900      # puerto alternativo

Endpoints:
    GET  /health                                    -> {"ok": true, ...}
    GET  /search?q=<query>&k=8&category=skills     -> [{path, category, name, score, snippet}, ...]
    POST /search  {"q": "...", "k": 8, "category": "..."}  (mismo resultado)

El orquestador `Maia/maia-brain.ts` intenta primero este servidor por HTTP
y cae a `scripts/rag_query.py` via subprocess si no esta arriba.
"""

from __future__ import annotations

import argparse
import json
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

import requests
import chromadb
from chromadb.config import Settings

REPO_ROOT   = Path(__file__).resolve().parent.parent
DB_DIR      = REPO_ROOT / "Maia" / "vectordb"
OLLAMA_URL  = "http://localhost:11434/api/embeddings"
EMBED_MODEL = "nomic-embed-text"
COLLECTION  = "luxus_os"

# Singletons cargados al arrancar (no por request)
_COLLECTION = None


def _load_collection():
    global _COLLECTION
    if _COLLECTION is not None:
        return _COLLECTION
    if not DB_DIR.exists():
        raise SystemExit(
            f"No existe {DB_DIR}. Ejecuta primero:\n"
            f"  python3 scripts/build_maia_dataset.py\n"
            f"  python3 scripts/rag_ingest.py"
        )
    client = chromadb.PersistentClient(
        path=str(DB_DIR), settings=Settings(anonymized_telemetry=False)
    )
    _COLLECTION = client.get_collection(COLLECTION)
    return _COLLECTION


def _embed(text: str) -> list[float]:
    r = requests.post(
        OLLAMA_URL,
        json={"model": EMBED_MODEL, "prompt": text},
        timeout=60,
    )
    r.raise_for_status()
    return r.json()["embedding"]


def _search(query: str, k: int = 8, category: str | None = None) -> list[dict]:
    col = _load_collection()
    where = {"category": category} if category else None
    res = col.query(query_embeddings=[_embed(query)], n_results=k, where=where)

    hits: list[dict] = []
    ids = res.get("ids", [[]])[0]
    for i in range(len(ids)):
        meta = res["metadatas"][0][i]
        hits.append({
            "path": meta["path"],
            "category": meta["category"],
            "name": meta["name"],
            "score": float(1 - res["distances"][0][i]),
            "snippet": res["documents"][0][i][:400],
        })
    return hits


class Handler(BaseHTTPRequestHandler):
    # Silencia el log de acceso por defecto
    def log_message(self, fmt, *args):
        return

    def _send(self, status: int, body: dict | list):
        payload = json.dumps(body, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(payload)

    def do_GET(self):
        url = urlparse(self.path)
        if url.path == "/health":
            ok = DB_DIR.exists()
            return self._send(200, {"ok": ok, "db": str(DB_DIR), "collection": COLLECTION})

        if url.path == "/search":
            qs = parse_qs(url.query)
            q = (qs.get("q") or [""])[0].strip()
            if not q:
                return self._send(400, {"error": "missing 'q'"})
            k = int((qs.get("k") or ["8"])[0])
            category = (qs.get("category") or [None])[0]
            try:
                return self._send(200, _search(q, k=k, category=category))
            except Exception as e:
                return self._send(500, {"error": str(e)})

        return self._send(404, {"error": "not found"})

    def do_POST(self):
        url = urlparse(self.path)
        if url.path != "/search":
            return self._send(404, {"error": "not found"})

        length = int(self.headers.get("Content-Length") or 0)
        try:
            body = json.loads(self.rfile.read(length) or b"{}")
        except json.JSONDecodeError:
            return self._send(400, {"error": "invalid json"})

        q = (body.get("q") or body.get("query") or "").strip()
        if not q:
            return self._send(400, {"error": "missing 'q'"})
        try:
            hits = _search(q, k=int(body.get("k") or 8), category=body.get("category"))
            return self._send(200, hits)
        except Exception as e:
            return self._send(500, {"error": str(e)})


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--port", type=int, default=8765)
    args = ap.parse_args()

    _load_collection()  # fallo temprano si falta el vectordb
    server = ThreadingHTTPServer((args.host, args.port), Handler)
    print(f"[rag_server] escuchando en http://{args.host}:{args.port}")
    print(f"[rag_server] db = {DB_DIR}   collection = {COLLECTION}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n[rag_server] bye.")
        server.server_close()


if __name__ == "__main__":
    main()
