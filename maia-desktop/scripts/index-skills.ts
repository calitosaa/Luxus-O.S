/**
 * Indexer offline para el RAG de skills.
 *
 * 1. Recorre `~/.openclaw/workspace/skills/<name>/SKILL.md`.
 * 2. Fragmenta por encabezados.
 * 3. Genera embeddings con `bge-small-en-v1.5` ONNX (a través del binding
 *    nativo Rust expuesto por la app — este script invoca el comando
 *    Tauri `rag_reindex_skills` cuando la app está abierta, o escribe un
 *    JSON intermedio si se ejecuta solo).
 *
 * Uso:
 *   npm run skills:index           # con la app abierta: usa el core Rust
 *   tsx scripts/index-skills.ts    # standalone: dump JSON listo para indexar
 */

import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";

const HOME = process.env.HOME ?? process.env.USERPROFILE ?? os.homedir();
const SKILLS_ROOT = path.join(HOME, ".openclaw", "workspace", "skills");
const OUT = path.join(import.meta.dirname, "..", ".maia-cache", "skills-index.json");

interface Chunk {
  skill: string;
  title: string;
  text: string;
  path: string;
}

function chunk(md: string): { title: string; text: string }[] {
  const lines = md.split("\n");
  const out: { title: string; text: string }[] = [];
  let cur = { title: "intro", text: "" };
  for (const l of lines) {
    if (l.startsWith("## ")) {
      if (cur.text.trim()) out.push(cur);
      cur = { title: l.replace(/^##\s*/, "").trim(), text: "" };
    } else {
      cur.text += l + "\n";
    }
  }
  if (cur.text.trim()) out.push(cur);
  return out;
}

function main() {
  if (!fs.existsSync(SKILLS_ROOT)) {
    console.error(`No existe ${SKILLS_ROOT}. Ejecuta primero: npm run skills:materialize`);
    process.exit(1);
  }
  const chunks: Chunk[] = [];
  for (const dir of fs.readdirSync(SKILLS_ROOT)) {
    const skillFile = path.join(SKILLS_ROOT, dir, "SKILL.md");
    if (!fs.existsSync(skillFile)) continue;
    const md = fs.readFileSync(skillFile, "utf8");
    for (const c of chunk(md)) {
      chunks.push({ skill: dir, title: c.title, text: c.text.trim(), path: skillFile });
    }
  }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(chunks, null, 2));
  console.log(`✔ ${chunks.length} chunks listos en ${OUT}`);
  console.log("Para generar embeddings, abre la app: el core Rust llama a rag_reindex_skills.");
}

main();
