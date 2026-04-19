---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/perf-optimizer/src/bridges/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Performance Optimizer Plugin - Bridges Barrel Export
 *
 * @module @claude-flow/plugin-perf-optimizer/bridges
 */

export {
  PerfSparseBridge,
  createPerfSparseBridge,
} from './sparse-bridge.js';

export {
  PerfFpgaBridge,
  createPerfFpgaBridge,
} from './fpga-bridge.js';
