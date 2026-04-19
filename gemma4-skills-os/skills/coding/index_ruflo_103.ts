---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/codex/src/dual-mode/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Dual-Mode Module
 * Collaborative execution of Claude Code + Codex workers
 */

export { DualModeOrchestrator, CollaborationTemplates } from './orchestrator.js';
export type {
  DualModeConfig,
  WorkerConfig,
  WorkerResult,
  CollaborationResult,
} from './orchestrator.js';

export { createDualModeCommand } from './cli.js';
