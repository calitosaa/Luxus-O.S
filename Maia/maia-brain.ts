/**
 * Maia Brain  -  Orquestador RAG sobre Ollama
 *
 *  Pipeline:
 *     user prompt
 *        -> retriever (ChromaDB via HTTP del script Python de RAG)
 *        -> construye <luxus_context>
 *        -> Ollama /api/chat con modelo "maia"
 *        -> stream de tokens
 *
 *  Requisitos en tiempo de ejecucion:
 *     - Ollama corriendo en :11434 con el modelo "maia" creado (ver Modelfile)
 *     - Ollama con "nomic-embed-text" descargado
 *     - scripts/rag_ingest.py ya ejecutado (Maia/vectordb existe)
 *     - Un pequeño servidor de RAG (scripts/rag_server.py) o usar rag_query.py por CLI
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

const OLLAMA_URL = process.env.OLLAMA_URL ?? 'http://localhost:11434';
const MAIA_MODEL = process.env.MAIA_MODEL ?? 'maia';
const REPO_ROOT = path.resolve(__dirname, '..');

export class MaiaBrain {
  constructor(public readonly topK: number = 8) {}

  /** Llama al script Python rag_query.py y parsea los resultados JSON. */
  async retrieve(query: string, category?: string): Promise<Hit[]> {
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
    });
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
    const hits = await this.retrieve(prompt, opts.category);
    const ctx = this.buildContext(hits);

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
