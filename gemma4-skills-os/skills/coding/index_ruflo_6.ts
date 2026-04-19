---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/test-intelligence/src/bridges/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Test Intelligence Plugin - Bridges Barrel Export
 *
 * @module @claude-flow/plugin-test-intelligence/bridges
 */

export {
  TestLearningBridge,
  createTestLearningBridge,
} from './learning-bridge.js';

export {
  TestSonaBridge,
  createTestSonaBridge,
} from './sona-bridge.js';
