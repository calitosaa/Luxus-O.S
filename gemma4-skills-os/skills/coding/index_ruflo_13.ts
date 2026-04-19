---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/code-intelligence/src/bridges/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Code Intelligence Plugin - Bridges Barrel Export
 *
 * @module @claude-flow/plugin-code-intelligence/bridges
 */

export {
  GNNBridge,
  createGNNBridge,
} from './gnn-bridge.js';

export {
  MinCutBridge,
  createMinCutBridge,
} from './mincut-bridge.js';
