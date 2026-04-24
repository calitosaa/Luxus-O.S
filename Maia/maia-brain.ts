/**
 * Maia Brain  -  Orquestador RAG sobre Ollama
 *
 *  Pipeline:
 *     user prompt
 *        -> retriever:
 *             1) HTTP a scripts/rag_server.py   (si esta arriba: ~30 ms/query)
 *             2) fallback: spawn scripts/rag_query.py --json   (~1-2 s/query)
 *        -> construye <luxus_context>
 *        -> Ollama /api/chat con modelo "maia"
 *        -> stream de tokens
 *
 *  Requisitos en tiempo de ejecucion:
 *     - Ollama corriendo en :11434 con el modelo "maia" creado (ver Modelfile)
 *     - Ollama con "nomic-embed-text" descargado
 *     - scripts/rag_ingest.py ya ejecutado (Maia/vectordb existe)
 *     - (Opcional) scripts/rag_server.py corriendo en :8765 para retrieval rapido
 */

import { spawn } from 'node:child_process';
import path from 'node:path';

type Hit = {
  path: string;
  category: string;
  name: string;
  score: number;
  snippet: string;
};

const OLLAMA_URL    = process.env.OLLAMA_URL    ?? 'http://localhost:11434';
const MAIA_MODEL    = process.env.MAIA_MODEL    ?? 'maia';
const RAG_SERVER    = process.env.MAIA_RAG_URL  ?? 'http://localhost:8765';
const RAG_TIMEOUT_MS = Number(process.env.MAIA_RAG_TIMEOUT_MS ?? 1500);
const REPO_ROOT     = path.resolve(__dirname, '..');

export class MaiaBrain {
  /** ha funcionado el servidor HTTP en algun intento? (evita reintentar si esta caido) */
  private httpAlive: boolean | null = null;

  constructor(public readonly topK: number = 8) {}

  /** Pide los hits via HTTP al rag_server.py. Timeout corto para fallback rapido. */
  private async retrieveViaHttp(query: string, category?: string): Promise<Hit[]> {
    const url = new URL('/search', RAG_SERVER);
    url.searchParams.set('q', query);
    url.searchParams.set('k', String(this.topK));
    if (category) url.searchParams.set('category', category);

    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), RAG_TIMEOUT_MS);
    try {
      const r = await fetch(url, { signal: ctrl.signal });
      if (!r.ok) throw new Error(`rag_server HTTP ${r.status}`);
      return (await r.json()) as Hit[];
    } finally {
      clearTimeout(t);
    }
  }

  /** Fallback: llama al script Python rag_query.py y parsea JSON. Mas lento (~1-2s). */
  private retrieveViaSubprocess(query: string, category?: string): Promise<Hit[]> {
    return new Promise((resolve, reject) => {
      const args = [
        path.join(REPO_ROOT, 'scripts', 'rag_query.py'),
        query,
        '--k', String(this.topK),
        '--json',
      ];
      if (category) args.push('--category', category);

      const py = spawn('python3', args, { cwd: REPO_ROOT });
      let out = '', err = '';
      py.stdout.on('data', (b) => (out += b));
      py.stderr.on('data', (b) => (err += b));
      py.on('close', (code) => {
        if (code !== 0) return reject(new Error(err || `rag_query exit ${code}`));
        try { resolve(JSON.parse(out) as Hit[]); }
        catch (e) { reject(e); }
      });
      py.on('error', reject);
    });
  }

  /** Obtiene los hits probando primero HTTP y cayendo a subprocess si falla. */
  async retrieve(query: string, category?: string): Promise<Hit[]> {
    if (this.httpAlive !== false) {
      try {
        const hits = await this.retrieveViaHttp(query, category);
        this.httpAlive = true;
        return hits;
      } catch {
        // silencioso: marcamos el servidor como no disponible y seguimos con el fallback
        this.httpAlive = false;
      }
    }
    return this.retrieveViaSubprocess(query, category);
  }

  /** Construye el bloque de contexto que se inyecta al system/user prompt. */
  buildContext(hits: Hit[]): string {
    if (!hits.length) return '';
    const body = hits.map((h, i) =>
      `[${i + 1}] (${h.category}/${h.name})  ${h.path}\n${h.snippet}`
    ).join('\n\n');
    return `<luxus_context>\n${body}\n</luxus_context>`;
  }

  /** Llama a Ollama /api/chat en modo stream y devuelve la respuesta completa. */
  async chat(prompt: string, opts: { category?: string; onToken?: (t: string) => void } = {}): Promise<string> {
    let ctx = '';
    try {
      const hits = await this.retrieve(prompt, opts.category);
      ctx = this.buildContext(hits);
    } catch (e) {
      // Sin RAG aun podemos responder con el modelo base: avisamos por stderr y seguimos.
      console.error('[maia] RAG no disponible, respondo solo con el modelo:', (e as Error).message);
    }

    const body = {
      model: MAIA_MODEL,
      stream: true,
      messages: [
        { role: 'user', content: ctx ? `${ctx}\n\n${prompt}` : prompt },
      ],
      options: { temperature: 0.3, top_p: 0.95 },
    };

    const res = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok || !res.body) throw new Error(`Ollama HTTP ${res.status}`);

    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let full = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      for (const line of dec.decode(value).split('\n')) {
        if (!line.trim()) continue;
        try {
          const j = JSON.parse(line);
          const tok = j.message?.content ?? '';
          if (tok) { full += tok; opts.onToken?.(tok); }
        } catch { /* chunks parciales */ }
      }
    }
    return full;
  }
}
