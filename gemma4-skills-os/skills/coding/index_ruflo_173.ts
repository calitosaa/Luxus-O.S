---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/src/cli/commands/start/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Modular start command implementation
 * Consolidates all start functionality into a single, extensible structure
 */

export { startCommand } from './start-command.js';
export { ProcessManager } from './process-manager.js';
export { ProcessUI } from './process-ui.js';
export { SystemMonitor } from './system-monitor.js';
export type { ProcessInfo, ProcessStatus, SystemStats } from './types.js';
