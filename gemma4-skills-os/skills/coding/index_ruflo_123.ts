---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/claims/src/infrastructure/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @claude-flow/claims - Infrastructure Layer
 *
 * Exports persistence implementations for the claims module.
 *
 * @module v3/claims/infrastructure
 */

// Claim Repository
export {
  InMemoryClaimRepository,
  createClaimRepository,
} from './claim-repository.js';

// Event Store
export {
  InMemoryClaimEventStore,
  createClaimEventStore,
  type EventFilter,
  type EventSubscription,
} from './event-store.js';
