---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/neural/src/modes/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * SONA Learning Modes Index
 *
 * Exports all learning mode implementations and the common interface.
 */

// Re-export base types and class (defined separately to avoid circular deps)
export type { ModeImplementation } from './base.js';
export { BaseModeImplementation } from './base.js';

// Export mode implementations
export { RealTimeMode } from './real-time.js';
export { BalancedMode } from './balanced.js';
export { ResearchMode } from './research.js';
export { EdgeMode } from './edge.js';
export { BatchMode } from './batch.js';
