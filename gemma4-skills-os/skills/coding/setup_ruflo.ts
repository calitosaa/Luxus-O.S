---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/__tests__/setup.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * V3 Test Setup
 * Global test configuration for Vitest
 */

import { beforeAll, afterAll, vi } from 'vitest';

// Mock console.warn for cleaner test output
beforeAll(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});

afterAll(() => {
  vi.restoreAllMocks();
});

// Increase timeout for integration tests
vi.setConfig({
  testTimeout: 30000,
});
