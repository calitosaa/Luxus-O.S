---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/services/worker/knowledge/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Knowledge Module - Named exports for knowledge agent functionality
 *
 * This is the public API for the knowledge module.
 */

// Types
export * from './types.js';

// Core classes
export { CorpusStore } from './CorpusStore.js';
export { CorpusBuilder } from './CorpusBuilder.js';
export { CorpusRenderer } from './CorpusRenderer.js';
export { KnowledgeAgent } from './KnowledgeAgent.js';
