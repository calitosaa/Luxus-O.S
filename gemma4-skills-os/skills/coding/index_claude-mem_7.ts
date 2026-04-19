---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/services/infrastructure/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Infrastructure module - Process management, health monitoring, and shutdown utilities
 */

export * from './ProcessManager.js';
export * from './HealthMonitor.js';
export * from './GracefulShutdown.js';
