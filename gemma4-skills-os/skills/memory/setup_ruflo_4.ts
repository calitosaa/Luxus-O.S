---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/embeddings/__tests__/setup.ts
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

/**
 * @claude-flow/embeddings Test Setup
 * Local test configuration for Vitest
 */

import { beforeAll, afterAll, vi } from 'vitest';

// Mock console.warn for cleaner test output
beforeAll(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});

afterAll(() => {
  vi.restoreAllMocks();
});
