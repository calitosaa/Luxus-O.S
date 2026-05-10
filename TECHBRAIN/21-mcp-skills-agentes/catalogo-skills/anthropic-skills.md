---
domain: "21-mcp-skills-agentes"
topic: "Anthropic Official Skills"
subtopic: "Skills oficiales publicados por Anthropic"
difficulty: "intermediate"
tags: [skills, anthropic, claude-code, agents]
related:
  - path: "../skills-system/skill-md-format.md"
    why: "Formato del SKILL.md que estos skills implementan"
  - path: "./community-top-skills.md"
    why: "Skills de la comunidad para comparar"
sources:
  - url: "https://github.com/VoltAgent/awesome-agent-skills"
    title: "VoltAgent/awesome-agent-skills — catalog with publishers"
    type: "docs"
  - url: "https://officialskills.sh/anthropics"
    title: "officialskills.sh — Anthropic skills directory"
    type: "docs"
last_verified: "2026-05"
needs_sources: false
---

# Skills oficiales de Anthropic

> **Resumen**: Anthropic publica un set de skills oficiales en `officialskills.sh/anthropics` y referenciados en [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills). Cubren creación de documentos, diseño visual, testing y meta-skills (skill-creator, mcp-builder).

## Catálogo completo

### Documentos y oficina

| Skill | Función |
|-------|---------|
| `anthropics/docx` | Crear, editar y analizar documentos Word |
| `anthropics/doc-coauthoring` | Edición colaborativa y co-autoría de documentos |
| `anthropics/pptx` | Crear, editar y analizar presentaciones PowerPoint |
| `anthropics/xlsx` | Crear, editar y analizar hojas de cálculo Excel |
| `anthropics/pdf` | Extraer texto, crear PDFs y manejar formularios |

### Diseño visual y artefactos

| Skill | Función |
|-------|---------|
| `anthropics/algorithmic-art` | Arte generativo con p5.js (con seeded randomness) |
| `anthropics/canvas-design` | Diseño visual en formatos PNG y PDF |
| `anthropics/frontend-design` | Tools de diseño y desarrollo UI/UX |
| `anthropics/slack-gif-creator` | GIFs animados optimizados para Slack |
| `anthropics/theme-factory` | Aplicar temas profesionales a artefactos |
| `anthropics/web-artifacts-builder` | Construir HTML artifacts complejos para claude.ai con React + Tailwind |
| `anthropics/brand-guidelines` | Aplicar colores y tipografía de la marca Anthropic |

### Desarrollo y testing

| Skill | Función |
|-------|---------|
| `anthropics/mcp-builder` | Crear MCP servers para integrar APIs y servicios externos |
| `anthropics/webapp-testing` | Testing de aplicaciones web locales con Playwright |

### Comunicación interna

| Skill | Función |
|-------|---------|
| `anthropics/internal-comms` | Escribir status reports, newsletters y FAQs |

### Meta-skills (skills sobre skills)

| Skill | Función |
|-------|---------|
| `anthropics/skill-creator` | Guía para crear skills que extienden capacidades de Claude |
| `anthropics/template` | Template básico para crear nuevos skills |

## Patrones observados

**1. Skills de I/O de archivos = formato del archivo**
Cada formato Office (docx, pptx, xlsx, pdf) tiene su skill dedicado. Esto confirma el patrón "un skill por dominio funcional concreto" — no un skill genérico "office-files".

**2. Skills de diseño usan output específico**
- `algorithmic-art` → p5.js (programatic, deterministic)
- `canvas-design` → PNG/PDF (raster + print)
- `frontend-design` → herramientas UI/UX (componentes web)

La separación es por medium de salida, no por función abstracta.

**3. Meta-skills**
`skill-creator` y `template` son skills que generan skills. Esto es el patrón recursivo de los sistemas extensibles — cada nivel de abstracción tiene su escalera para subir al siguiente.

**4. mcp-builder vs MCP servers**
`anthropics/mcp-builder` es un **skill** (no un MCP server) que ayuda al LLM a construir MCP servers. Diferencia conceptual:
- **Skill**: instrucciones + recursos para que el LLM haga algo
- **MCP server**: programa que expone capabilities ejecutables

## Distribución y compatibilidad

Los skills oficiales de Anthropic son distribuidos vía `officialskills.sh` y son compatibles con:
- Claude Code (carga directa)
- Cursor
- Codex CLI
- Gemini CLI
- Antigravity
- Otros tools que soporten el formato SKILL.md

## Conexión con otros temas

| Tema | Relación |
|------|----------|
| [[../skills-system/skill-md-format.md]] | El formato que estos skills implementan |
| [[./google-antigravity-skills.md]] | Equivalentes para Antigravity |
| [[../mcp-protocol/spec-completa.md]] | mcp-builder skill genera MCP servers |
| [[./community-top-skills.md]] | Comparar con skills community-driven |

## Fuentes primarias

- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — catálogo principal con publishers
- [officialskills.sh](https://officialskills.sh) — directorio web de skills oficiales
- [Anthropic Skill Creator skill](https://officialskills.sh/anthropics/skills/skill-creator) — meta-skill para construir nuevos skills
