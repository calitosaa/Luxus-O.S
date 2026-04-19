---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: apps/web-app/src/__tests__/App.performance.test.tsx
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('App route loading', () => {
  it('lazy loads route pages to keep the initial bundle smaller', () => {
    const appPath = path.resolve(__dirname, '..', 'App.tsx');
    const source = fs.readFileSync(appPath, 'utf8');

    expect(source).toMatch(/lazy\(\(\) => import\('\.\/pages\/Home'\)\)/);
    expect(source).toMatch(/lazy\(\(\) => import\('\.\/pages\/SkillDetail'\)\)/);
    expect(source).toMatch(/<Suspense/);
  });
});
