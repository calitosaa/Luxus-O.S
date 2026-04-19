---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/hyperbolic-reasoning/tests/__mocks__/gnn-wasm.ts
license: MIT
category: skills/reasoning
imported_at: 2026-04-19
---

/**
 * Mock for @ruvector/gnn-wasm
 *
 * This mock provides stub implementations for testing
 * without requiring the actual WASM module.
 */

export const init = async () => {
  return true;
};

export const createGraph = () => ({
  addNode: () => 0,
  addEdge: () => {},
  forward: () => new Float32Array(32),
});

export const GnnModel = class {
  constructor() {}
  forward() {
    return new Float32Array(32);
  }
};

export default {
  init,
  createGraph,
  GnnModel,
};
