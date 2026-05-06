# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the **Gemma 4 Skills Operating System** — a large-scale knowledge and agent definition repository. It contains no build system or test runner at the root level. All content lives under `gemma4-skills-os/`.

## Architecture

```
gemma4-skills-os/
├── agents/       # 55 TypeScript agent modules
├── skills/       # ~69K Markdown skill files (9 categories)
├── training-prompts/  # Prompt templates by domain
├── workflows/    # N8N automation workflow JSONs
└── logic/        # Python/TS implementation modules (browser-use, mcp-protocol, n8n, openclaw, pc-reasoning)
```

### Agents (`agents/`)

55 specialized agents, each as a self-contained directory with:
- `agent.ts` — Extends `BaseAgent`, implements `initialize()` and `execute()`
- `config.ts` — Exports `{ name, version, skills[] }`
- `index.ts` — Re-exports agent class and config
- `README.md` — Lists skills used

Agent categories:
- **Orchestration**: `orchestrator`, `orchestrator-main`, `orchestrator-fallback`, `orchestrator-multiagent`
- **Reasoning**: `reasoning-cot`, `reasoning-mathematical`, `reasoning-planner`, `reasoning-treeofthought`, `reasoning-logicvalidator`
- **RAG**: `rag-pipeline`, `rag-contextbuilder`, `rag-queryrouter`, `rag-reranker`, `rag-evaluator`
- **Vision**: `vision-imageanalyzer`, `vision-ocr`, `vision-chartreader`, `vision-diagraminterpreter`, `vision-documentparser`
- **Domain**: `domain-financial`, `domain-legal`, `domain-medical`, `domain-scientific`, `domain-technical-writer`
- **Safety**: `safety-contentfilter`, `safety-jailbreakdetector`, `safety-refusalcalibrator`
- **Structured Output**: `structuredoutput-code`, `structuredoutput-json`, `structuredoutput-table`
- **Automation**: `automation`
- **Other**: `context-*`, `factcheck-*`, `spanish-*`, `creativewriting-*`, `computeruse-*`, `realtimedata-*`, `inference-*`, `codeexecution-*`, `pc-control`, `design`, `research`, `general`

### Skills (`skills/`)

Markdown files with YAML frontmatter (`source_repo`, `source_file`, `license`, `category`, `imported_at`). Organized into:
- `coding/`, `design/`, `files/`, `voice/`, `web-search/`
- `reasoning/fact-checking/`, `reasoning/multi-step/`
- `memory/context-management/`, `memory/rag/`
- `general/domain-specialists/`, `general/safety-alignment/`, `general/spanish-multilingual/`
- `expansion/` — Auto-generated pattern variants for agent/rag/reasoning/safety/vision

Skills are matched to agents via the `skills[]` array in each agent's `config.ts`.

### Workflows (`workflows/`)

N8N workflow JSON files organized by domain: `ai-pipelines/`, `calendar/`, `data/`, `email/`, `general/`, `notifications/`.

### Logic (`logic/`)

Implementation modules:
- `browser-use/` — Browser automation
- `mcp-protocol/` — Model Context Protocol
- `n8n/` — N8N workflow engine
- `openclaw/` — Open Claude Agent Workflow
- `pc-reasoning/` — OmniParser vision/PC control (Python + Jupyter notebooks)

## Adding or Modifying Agents

Each new agent follows the same pattern as existing ones. The `config.ts` skills list must reference skill names that exist under `skills/`. The `agent.ts` class name should be `{AgentName}Agent` (e.g., `VisionAgent`, `OrchestratorAgent`); avoid the generic `AgentNameAgent` template artifact for new agents.

## File Naming Conventions

- Skills: `{uuid}__{skill-name}.md` with a paired `.metadata/{uuid}.json`
- Agent JSON definitions (in `agents/general/`, `agents/orchestrator/`, `agents/automation/`): `{timestamp}_ruflo.json` or `{workflow-name}_{source}.json`
- Workflows: `{id}_{trigger}_{type}_{category}_n8n-workflows.json`
