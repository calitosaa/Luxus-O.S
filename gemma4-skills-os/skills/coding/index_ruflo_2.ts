---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/quantum-optimizer/src/bridges/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Quantum Optimizer Plugin - Bridges Barrel Export
 *
 * @module @claude-flow/plugin-quantum-optimizer/bridges
 */

export {
  ExoticBridge,
  createExoticBridge,
} from './exotic-bridge.js';
export type { WasmModuleStatus } from './exotic-bridge.js';

export {
  DagBridge,
  createDagBridge,
} from './dag-bridge.js';
export type {
  Dag,
  DagNode,
  DagEdge,
  TopologicalSortResult,
  CriticalPathResult,
} from './dag-bridge.js';
