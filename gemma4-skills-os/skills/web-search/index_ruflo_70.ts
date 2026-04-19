---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/plugins/examples/ruvector-plugins/shared/index.ts
license: MIT
category: skills/web-search
imported_at: 2026-04-19
---

/**
 * Shared utilities for RuVector plugins
 */

export {
  // Interfaces
  IVectorDB,
  ILoRAEngine,
  LoRAAdapter,
  // Fallback implementations
  FallbackVectorDB,
  FallbackLoRAEngine,
  // Factory functions
  createVectorDB,
  createLoRAEngine,
  // Utilities
  cosineSimilarity,
  generateHashEmbedding,
  LazyInitializable,
} from './vector-utils.js';
