---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/hyperbolic-reasoning/src/bridges/index.ts
license: MIT
category: skills/reasoning
imported_at: 2026-04-19
---

/**
 * Hyperbolic Reasoning Plugin - Bridges Barrel Export
 *
 * @module @claude-flow/plugin-hyperbolic-reasoning/bridges
 */

export {
  HyperbolicBridge,
  createHyperbolicBridge,
} from './hyperbolic-bridge.js';
export type { WasmModuleStatus } from './hyperbolic-bridge.js';

export {
  GnnBridge,
  createGnnBridge,
} from './gnn-bridge.js';
export type {
  GnnConfig,
  Graph,
  GnnResult,
  EntailmentPrediction,
} from './gnn-bridge.js';
