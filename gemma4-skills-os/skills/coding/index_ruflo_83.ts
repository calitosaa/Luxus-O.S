---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/shared/src/services/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Shared Services
 *
 * @module @claude-flow/shared/services
 */

export {
  V3ProgressService,
  createV3ProgressService,
  getV3Progress,
  syncV3Progress,
  getDefaultProgressService,
  type V3ProgressMetrics,
  type V3ProgressOptions,
  type ProgressChangeEvent,
} from './v3-progress.service.js';
