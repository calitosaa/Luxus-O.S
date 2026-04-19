---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/gastown-bridge/src/convoy/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Convoy Module Exports
 *
 * Provides convoy tracking and observation capabilities for the
 * Gas Town Bridge Plugin. Convoys are work-order groups that track
 * related beads (issues) through their lifecycle.
 *
 * @module gastown-bridge/convoy
 */

// Convoy Tracker
export {
  ConvoyTracker,
  createConvoyTracker,
  // Types
  type ConvoyEventType,
  type ConvoyEvent,
  type ConvoyTrackerConfig,
  type ConvoyLogger,
} from './tracker.js';

// Convoy Observer
export {
  ConvoyObserver,
  createConvoyObserver,
  // Lazy loading support (defers observer initialization until first watch)
  createLazyConvoyObserver,
  getLazyObserverStats,
  // Types
  type WasmGraphModule,
  type CompletionCallback,
  type WatchHandle,
  type ConvoyObserverConfig,
  type BlockerInfo,
  type ReadyIssueInfo,
  type CompletionCheckResult,
  type ObserverLogger,
} from './observer.js';
