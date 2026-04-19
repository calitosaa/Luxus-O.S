---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/shared/src/types/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * V3 Types - Public API
 * Modernized type system for claude-flow v3
 */

// Agent types
export * from './agent.types.js';

// Task types
export * from './task.types.js';

// Swarm types
export * from './swarm.types.js';

// Memory types
export * from './memory.types.js';

// MCP types
export * from './mcp.types.js';

// Re-export core interfaces for convenience
export * from '../core/interfaces/index.js';
