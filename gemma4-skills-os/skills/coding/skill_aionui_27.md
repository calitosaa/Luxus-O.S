---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: .claude/skills/architecture/SKILL.md
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

---
name: architecture
description: |
  Project architecture and file structure conventions for all process types.
  Use when: (1) Creating new files or modules, (2) Deciding where code should go,
  (3) Converting single-file components to directories, (4) Reviewing code for structure compliance,
  (5) Adding new bridges, services, agents, or workers.
---

# Architecture Skill

Determine correct file placement and structure for an Electron multi-process project.

## Detailed References

- **Renderer layer** (components, hooks, utils, pages, CSS): [references/renderer.md](references/renderer.md)
- **Main process & shared layer** (bridges, services, worker, preload): [references/process.md](references/process.md)
- **Project root & src/ layout** (directory structure, migration status): [references/project-layout.md](references/project-layout.md)

---

## Decision Tree — Where Does New Code Go?

```
Is it UI (React components, hooks, pages)?
  └── YES → src/renderer/              → see references/renderer.md

Is it an IPC handler responding to renderer calls?
  └── YES → src/process/bridge/        → see references/process.md

Is it business logic running in the main process?
  └── YES → src/process/services/      → see references/process.md

Is it an AI platform connection (API client, message protocol)?
  └── YES → src/process/agent/<platform>/

Is it a background task that runs in a worker thread?
  └── YES → src/process/worker/

Is it used by BOTH main and renderer processes?
  └── YES → src/common/

Is it an HTTP/WebSocket endpoint?
  └── YES → src/process/webserver/

Is it a plugin/extension resolver or loader?
  └── YES → src/process/extensions/

Is it a messaging channel (Lark, DingTalk, Telegram)?
  └── YES → src/process/channels/
```

---

## Process Boundary Rules

**Hard rules — violating them causes runtime crashes.**

| Process                            | Can use                                                    | Cannot use                                      |
| ---------------------------------- | ---------------------------------------------------------- | ----------------------------------------------- |
| **Main** (`src/process/`)          | Node.js, Electron main APIs, `fs`, `path`, `child_process` | DOM APIs (`document`, `window`, React)          |
| **Renderer** (`src/renderer/`)     | DOM APIs, React, browser APIs                              | Node.js APIs (`fs`, `path`), Electron main APIs |
| **Worker** (`src/process/worker/`) | Node.js APIs                                               | DOM APIs, Electron APIs                         |
| **Preload** (`src/preload.ts`)     | `contextBridge`, `ipcRenderer`                             | DOM manipulation, Node.js `fs`                  |

Cross-process communication:

- Main ↔ Renderer: IPC via `src/preload.ts` + `src/process/bridge/*.ts`
- Main ↔ Worker: fork protocol via `src/process/worker/WorkerProtocol.ts`

```typescript
// NEVER in renderer
import { something } from '@process/services/foo'; // crashes at runtime

// Use IPC instead
const result = await window.api.someMethod(); // goes through preload
```

---

## Naming Conventions

### Directories

| Scope                              | Convention | Reason                                                  |
| ---------------------------------- | ---------- | ------------------------------------------------------- |
| **Renderer** component/module dirs | PascalCase | React convention — dir name = component name            |
| **Everything else**                | lowercase  | Node.js convention                                      |
| **Categorical dirs** (everywhere)  | lowercase  | `components/`, `hooks/`, `utils/`, `services/`          |
| **Platform dirs** (everywhere)     | lowercase  | `acp/`, `codex/`, `gemini/` — cross-process consistency |

> Quick test: "Inside `src/renderer/` AND represents a specific component/feature (not a category)?" → PascalCase. Otherwise → lowercase.

### Files

| Content                   | Convention                      | Examples                              |
| ------------------------- | ------------------------------- | ------------------------------------- |
| React components, classes | PascalCase                      | `SettingsModal.tsx`, `CronService.ts` |
| Hooks                     | camelCase with `use` prefix     | `useTheme.ts`, `useCronJobs.ts`       |
| Utilities, helpers        | camelCase                       | `formatDate.ts`, `cronUtils.ts`       |
| Entry points              | `index.ts` / `index.tsx`        | Required for directory-based modules  |
| Config, types, constants  | camelCase                       | `types.ts`, `constants.ts`            |
| Styles                    | kebab-case or `Name.module.css` | `chat-layout.css`                     |

---

## Structural Rules

1. **Directory size limit**: Max **10** direct children. Split into subdirectories by responsibility when approaching.
2. **No single-file directories**: Merge into parent or related directory.
3. **Single file vs directory**: If a component needs a private sub-component or hook, convert to a directory with `index.tsx`.
4. **Page-private first**: Start code in `pages/<PageName>/`. Promote to shared only when a second consumer appears.

## Test File Mapping

Tests mirror source files in `tests/` subdirectories:

| Source                                      | Test                                            |
| ------------------------------------------- | ----------------------------------------------- |
| `src/process/services/CronService.ts`       | `tests/unit/cronService.test.ts`                |
| `src/renderer/hooks/ui/useAutoScroll.ts`    | `tests/unit/useAutoScroll.dom.test.ts`          |
| `src/process/extensions/ExtensionLoader.ts` | `tests/unit/extensions/extensionLoader.test.ts` |

When `tests/unit/` exceeds 10 direct children, group into subdirectories matching source structure.

---

## Quick Checklist

- [ ] Code is in the correct process directory (no cross-process imports)
- [ ] Renderer code does not use Node.js APIs
- [ ] Main process code does not use DOM APIs
- [ ] New IPC channels are bridged through `preload.ts`
- [ ] Renderer component/module dirs use PascalCase; categorical dirs use lowercase
- [ ] Platform dirs use lowercase everywhere
- [ ] Directory-based modules have `index.tsx` / `index.ts` entry point
- [ ] Page-private code is under `pages/<PageName>/`, not in shared dirs
- [ ] No single-file directories
- [ ] No directory exceeds 10 direct children
- [ ] New source files are auto-included in coverage — verify they are not accidentally excluded in `vitest.config.ts` → `coverage.exclude`
- [ ] New services separate pure logic from IO
