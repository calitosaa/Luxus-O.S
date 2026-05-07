/**
 * Materializa todas las skills/agentes en `~/.openclaw/workspace/skills/<name>/SKILL.md`
 * con frontmatter compatible con OpenClaw.
 *
 * Fuentes:
 *  1) `gemma4-skills-os/agents/<name>/README.md`  → skill por agente
 *  2) `gemma4-skills-os/skills/<categoria>/*.md`  → skill por archivo (categoría)
 *  3) `EXTRA_SKILLS` (extra-skills.ts)            → 25 skills nuevas inspiradas en NotebookLM/n8n/Twin
 */

import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";
import { EXTRA_SKILLS } from "./extra-skills.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..", "..");
const AGENTS_DIR = path.join(REPO_ROOT, "gemma4-skills-os", "agents");
const SKILLS_DIR = path.join(REPO_ROOT, "gemma4-skills-os", "skills");
const HOME = process.env.HOME ?? process.env.USERPROFILE ?? os.homedir();
const TARGET = path.join(HOME, ".openclaw", "workspace", "skills");

function frontmatter(obj: Record<string, unknown>): string {
  const lines = Object.entries(obj).map(([k, v]) => {
    if (Array.isArray(v)) return `${k}:\n${v.map((x) => `  - ${x}`).join("\n")}`;
    return `${k}: ${typeof v === "string" ? JSON.stringify(v) : v}`;
  });
  return `---\n${lines.join("\n")}\n---\n`;
}

function ensureDir(p: string) { fs.mkdirSync(p, { recursive: true }); }

function writeSkill(name: string, frontmatterObj: Record<string, unknown>, body: string) {
  const dir = path.join(TARGET, name);
  ensureDir(dir);
  fs.writeFileSync(path.join(dir, "SKILL.md"), frontmatter(frontmatterObj) + body, "utf8");
}

function fromAgent(agentDir: string) {
  const name = path.basename(agentDir);
  const readme = path.join(agentDir, "README.md");
  if (!fs.existsSync(readme)) return;
  const md = fs.readFileSync(readme, "utf8");
  const desc = md.split("\n").find((l) => l.trim() && !l.startsWith("#") && !l.startsWith("##")) ?? name;
  const skills = (md.match(/^'([^']+)'/gm) ?? []).join(", ");
  writeSkill(name, {
    name,
    kind: "maia-agent",
    category: name.split("-")[0],
    alwaysOn: true,
    inputs: ["text", "image", "audio"],
    capabilities: skills,
  }, `# ${name}\n\n${desc}\n\n## Origen\nGenerado desde \`gemma4-skills-os/agents/${name}/README.md\`.\n`);
}

function fromSkillFile(category: string, file: string) {
  const base = path.basename(file).replace(/\.[^.]+$/, "");
  const name = `${category}-${base}`.toLowerCase().replace(/[^a-z0-9-]+/g, "-").slice(0, 64);
  const body = fs.existsSync(file) && file.endsWith(".md")
    ? fs.readFileSync(file, "utf8").slice(0, 4_000)
    : `Recurso: \`${file}\``;
  writeSkill(name, {
    name,
    kind: "maia-skill",
    category,
    source: path.relative(REPO_ROOT, file),
  }, `# ${name}\n\n${body}\n`);
}

function fromExtras() {
  for (const s of EXTRA_SKILLS) {
    writeSkill(s.name, {
      name: s.name,
      kind: "maia-extra",
      category: s.category,
      triggers: s.triggers,
      needs: s.needs,
      inspiration: s.inspiration,
    }, `# ${s.name}\n\n${s.description}\n\n## Inspiración\n${s.inspiration}\n\n## Triggers\n${s.triggers.map((t) => `- ${t}`).join("\n")}\n\n## Depende de\n${s.needs.map((n) => `- ${n}`).join("\n")}\n`);
  }
}

function main() {
  ensureDir(TARGET);
  // 1) agentes
  if (fs.existsSync(AGENTS_DIR)) {
    for (const entry of fs.readdirSync(AGENTS_DIR)) {
      const dir = path.join(AGENTS_DIR, entry);
      if (fs.statSync(dir).isDirectory()) fromAgent(dir);
    }
  }
  // 2) skills (sólo .md para evitar saturar; los demás quedan referenciados)
  if (fs.existsSync(SKILLS_DIR)) {
    for (const cat of fs.readdirSync(SKILLS_DIR)) {
      const catDir = path.join(SKILLS_DIR, cat);
      if (!fs.statSync(catDir).isDirectory()) continue;
      const files = fs.readdirSync(catDir)
        .filter((f) => f.endsWith(".md"))
        .slice(0, 10);
      for (const f of files) fromSkillFile(cat, path.join(catDir, f));
    }
  }
  // 3) extras
  fromExtras();

  const count = fs.readdirSync(TARGET).filter((d) => fs.statSync(path.join(TARGET, d)).isDirectory()).length;
  console.log(`✔ skills materializadas en ${TARGET} — total: ${count}`);
}

main();
