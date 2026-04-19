---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/services/sqlite/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// Export main components
export {
  ClaudeMemDatabase,
  DatabaseManager,
  getDatabase,
  initializeDatabase,
  MigrationRunner
} from './Database.js';

// Export session store (CRUD operations for sessions, observations, summaries)
// @deprecated Use modular functions from Database.ts instead
export { SessionStore } from './SessionStore.js';

// Export session search (FTS5 and structured search)
export { SessionSearch } from './SessionSearch.js';

// Export types
export * from './types.js';

// Export migrations
export { migrations } from './migrations.js';

// Export transactions
export { storeObservations, storeObservationsAndMarkComplete } from './transactions.js';

// Re-export all modular functions for convenient access
export * from './Sessions.js';
export * from './Observations.js';
export * from './Summaries.js';
export * from './Prompts.js';
export * from './Timeline.js';
export * from './Import.js';
