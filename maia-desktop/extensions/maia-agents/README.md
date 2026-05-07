# MAIA Agents — plugin OpenClaw

Pipeline jerárquico de los 55 agentes MAIA, siempre activos en cada turno.

```
TURN ─▶ pre (11)   safety-* · spanish-* · reasoning-*
       ─▶ main (35) orchestrator-* · code · rag · vision · realtimedata · creative · domain · computeruse · automation · inference · research · design
       ─▶ post (7)  factcheck-* · context-*
```

## Tools expuestas a OpenClaw

- `maia.skills.list` · catálogo de skills + agentes
- `maia.skills.search` · RAG (LanceDB + bge-small) por similitud
- `maia.broadcast` · ejecuta el pipeline completo y emite `maia.tick`

## Instalación dev

```bash
cd vendor/openclaw
pnpm add ../../maia-desktop/extensions/maia-agents -w
```

Luego activar en `~/.openclaw/openclaw.json`:

```json
{ "extensions": { "maia-agents": { "enabled": true } } }
```
