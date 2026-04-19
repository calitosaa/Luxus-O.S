---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/cognitive-kernel/src/bridges/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Cognitive Kernel Bridges Index
 *
 * Exports all WASM bridges for cognitive augmentation.
 */

export {
  CognitiveBridge,
  createCognitiveBridge,
  type WasmModuleStatus,
  type CognitiveConfig,
  type AttentionState,
} from './cognitive-bridge.js';

export {
  SonaBridge,
  createSonaBridge,
  type SonaConfig,
  type SonaTrajectory,
  type SonaStep,
  type LoRAWeights,
  type EWCState,
  type SonaPrediction,
} from './sona-bridge.js';
