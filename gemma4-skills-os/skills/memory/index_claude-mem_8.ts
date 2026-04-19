---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/services/context/index.ts
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

/**
 * Context Module - Public API
 *
 * Re-exports the main context generation functionality.
 */

export { generateContext } from './ContextBuilder.js';
export type { ContextInput, ContextConfig } from './types.js';

// Component exports for advanced usage
export { loadContextConfig } from './ContextConfigLoader.js';
export { calculateTokenEconomics, calculateObservationTokens } from './TokenCalculator.js';
export {
  queryObservations,
  querySummaries,
  buildTimeline,
  getPriorSessionMessages,
} from './ObservationCompiler.js';
