---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/legal-contracts/src/bridges/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Legal Contracts Plugin - Bridges Barrel Export
 *
 * @module @claude-flow/plugin-legal-contracts/bridges
 */

export {
  AttentionBridge,
  createAttentionBridge,
} from './attention-bridge.js';

export {
  DAGBridge,
  createDAGBridge,
} from './dag-bridge.js';
