/**
 * MAIA Agents — plugin OpenClaw.
 *
 * Registra:
 *   - tool `maia.broadcast`     → ejecuta el pipeline jerárquico de 55 agentes
 *   - tool `maia.skills.search` → consulta el RAG de skills (LanceDB)
 *   - tool `maia.skills.list`   → lista skills + agentes disponibles
 *   - event `maia.tick`         → emite el progreso por agente (UI lo consume)
 *
 * El plugin asume que el daemon openclaw corre y que la app Tauri MAIA
 * expone `http://127.0.0.1:9999/maia` para reenviar la inferencia local
 * a Gemma 4 E4B (vía llama.cpp en `:8080`).
 */

import type { PluginContext } from "@openclaw/plugin-sdk";
import { AGENTS, PHASES, type AgentDef } from "./agents.ts";

export default async function activate(ctx: PluginContext) {
  const log = ctx.logger.child("maia-agents");
  const cfg = ctx.config.get<{ alwaysOn: boolean; skillsRagEnabled: boolean }>();

  log.info(`activating MAIA agents (alwaysOn=${cfg.alwaysOn}, ragEnabled=${cfg.skillsRagEnabled})`);

  ctx.tools.register({
    name: "maia.skills.list",
    description: "Lista skills y agentes MAIA disponibles.",
    schema: { type: "object", additionalProperties: false, properties: {} },
    handler: async () => ({ agents: AGENTS, totalSkills: await fetchSkillCount() }),
  });

  ctx.tools.register({
    name: "maia.skills.search",
    description: "Búsqueda semántica de skills por similitud (RAG).",
    schema: {
      type: "object",
      properties: {
        query: { type: "string" },
        k: { type: "integer", default: 8 },
      },
      required: ["query"],
    },
    handler: async ({ query, k = 8 }) => {
      const r = await fetch(`http://127.0.0.1:9999/maia/rag_search_skills`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query, k }),
      });
      return r.json();
    },
  });

  ctx.tools.register({
    name: "maia.broadcast",
    description: "Ejecuta los 55 agentes en pipeline para un input dado.",
    schema: {
      type: "object",
      properties: { input: { type: "string" } },
      required: ["input"],
    },
    handler: async ({ input }) => {
      const runId = `run-${Date.now()}`;
      for (const phase of PHASES) {
        const inPhase = AGENTS.filter((a: AgentDef) => a.phase === phase);
        await Promise.allSettled(
          inPhase.map(async (a) => {
            const t0 = performance.now();
            ctx.events.emit("maia.tick", { runId, agent: a.name, phase, status: "running" });
            try {
              await a.run(input, ctx);
              ctx.events.emit("maia.tick", { runId, agent: a.name, phase, status: "done", ms: Math.round(performance.now() - t0) });
            } catch (err) {
              ctx.events.emit("maia.tick", { runId, agent: a.name, phase, status: "error", note: String(err) });
            }
          })
        );
      }
      return { runId };
    },
  });

  log.info(`MAIA agents listos · ${AGENTS.length} agentes · ${PHASES.length} fases`);
}

async function fetchSkillCount(): Promise<number> {
  try {
    const r = await fetch(`http://127.0.0.1:9999/maia/skills_count`);
    return (await r.json()).count ?? 0;
  } catch { return 0; }
}
