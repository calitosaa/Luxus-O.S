# MAIA Desktop

App de escritorio (`.exe` + builds móviles) que envuelve **OpenClaw** con UI **Material 3 Expressive** y un cerebro local **Gemma 4 E4B**. Las 55 skills y los agentes del repo `gemma4-skills-os/` se cargan como RAG; los agentes están **siempre activos** en cada turno; "La Oficina" (Canvas A2UI) se preserva intacta.

## Stack

| Capa | Tech |
|------|------|
| Shell | Tauri 2 (`.exe` ~10 MB · móvil con tauri-mobile) |
| UI | Lit + Beer CSS + tokens M3 Expressive (`tokens.css`, `motion-springs.css`, `shapes.css`) |
| Backend | Rust + tokio (supervisor, RAG, broadcaster, channels, model, ingest) |
| LLM | **Gemma 4 E4B** (fallback E2B/E1B) vía `llama.cpp server` HTTP |
| RAG | LanceDB embebida + embeddings ONNX `bge-small-en-v1.5` |
| Agente | OpenClaw daemon embebido en `vendor/openclaw/` |

## Arranque

```bash
# 1. instalar dependencias
npm install

# 2. instalar OpenClaw global (o vendoring desde vendor/openclaw)
npm install -g openclaw@latest
openclaw onboard --install-daemon

# 3. materializar skills + indexar
npm run skills:bootstrap

# 4. dev
npm run tauri:dev

# 5. build .exe / .dmg / .AppImage / .apk
npm run tauri:build
```

## Pantallas

- **Oficina** — Canvas A2UI de OpenClaw (no se toca) + sidebar de canales y skills activas.
- **Procesos** — sesiones, tools y skills corriendo. Pausar / detener / modificar / eliminar.
- **Skills & Agentes** — catálogo del RAG + búsqueda en vivo + agentes "siempre on".
- **Canales** — WhatsApp / Telegram / Discord / Slack / Signal / iMessage / Matrix / Teams / + 13 más.
- **Modelo** — selector E4B/E2B/E1B, quantización, monitor RAM/VRAM/tps.
- **Flujos** — explorador de los 2.4k workflows n8n locales con `Importar como skill`.
- **Perfil** — tema dinámico desde wallpaper, idioma, exportar memoria.

## Skills extra autogeneradas

Inspiradas en NotebookLM, n8n, Twin AI, Open Interpreter y AutoGPT. Ver `scripts/extra-skills.ts`. Incluyen `notebook-source-organizer`, `daily-briefing`, `smart-clipboard`, `screen-recorder-summarizer`, `voice-memo-transcriber`, `workflow-canvas-builder`, `model-router-arbitrage`, `web-schema-extractor`, `desktop-ui-tester`, `meeting-notetaker`, `pdf-source-chatter`, `youtube-knowledge-extractor`, `personal-knowledge-graph`, `agent-self-improver` y más (25 en total).

## Estructura

```
maia-desktop/
├── src-tauri/          Core Rust (supervisor, rag, agents, channels, model, ingest)
├── src/
│   ├── components/     Web components M3 Expressive (Lit)
│   ├── pages/          Oficina · Procesos · Skills · Canales · Modelo · Flujos · Perfil
│   ├── services/       IPC, RAG, agent-stream
│   └── styles/         tokens · motion-springs · shapes
├── scripts/            materialize-skills · index-skills · extra-skills
└── README.md
```

## Notas

- El Canvas A2UI corre como servidor local del daemon openclaw (`extensions/canvas`); se embebe en la pantalla "Oficina" vía `<iframe>` apuntando a `http://127.0.0.1:7666`.
- El gateway RPC de openclaw escucha en `7665`; el supervisor Rust lo arranca y lo monitoriza.
- llama.cpp expone Gemma 4 E4B en `http://127.0.0.1:8080/v1`.
- Los datos sensibles (claves API, memoria) viven en `~/.openclaw/workspace/`. Nunca se suben al repo.
