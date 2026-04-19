---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/neural-coordination/src/bridges/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Neural Coordination Bridges Index
 *
 * Exports all WASM bridges for neural coordination.
 */

export {
  NervousSystemBridge,
  createNervousSystemBridge,
  type WasmModuleStatus,
  type NervousSystemConfig,
  type NeuralSignal,
  type CoordinationResult,
} from './nervous-system-bridge.js';

export {
  AttentionBridge,
  createAttentionBridge,
  type AttentionConfig,
  type AttentionOutput,
} from './attention-bridge.js';
