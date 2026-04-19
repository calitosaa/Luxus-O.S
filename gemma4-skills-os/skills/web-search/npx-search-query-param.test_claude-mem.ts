---
source_repo: https://github.com/thedotmack/claude-mem
source_file: tests/npx-search-query-param.test.ts
license: MIT
category: skills/web-search
imported_at: 2026-04-19
---

import { describe, it, expect } from 'bun:test';
import { readFileSync } from 'fs';
import { join } from 'path';

const runtimeSourcePath = join(
  __dirname,
  '..',
  'src',
  'npx-cli',
  'commands',
  'runtime.ts',
);
const runtimeSource = readFileSync(runtimeSourcePath, 'utf-8');

describe('NPX search query param', () => {
  it('documents the search endpoint with query param', () => {
    expect(runtimeSource).toContain('GET /api/search?query=<query>');
  });

  it('uses query param instead of q param for worker search requests', () => {
    expect(runtimeSource).toContain('/api/search?query=${encodeURIComponent(query)}');
    expect(runtimeSource).not.toContain('/api/search?q=${encodeURIComponent(query)}');
  });
});
