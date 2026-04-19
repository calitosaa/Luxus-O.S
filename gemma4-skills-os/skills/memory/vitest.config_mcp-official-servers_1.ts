---
source_repo: https://github.com/modelcontextprotocol/servers
source_file: src/memory/vitest.config.ts
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/__tests__/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['**/*.ts'],
      exclude: ['**/__tests__/**', '**/dist/**'],
    },
  },
});
