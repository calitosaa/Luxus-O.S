---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: tests/unit/common/appEnv.test.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/common/platform', () => ({
  getPlatformServices: () => ({ paths: { isPackaged: () => false } }),
}));

describe('common/appEnv', () => {
  afterEach(() => {
    vi.resetModules();
  });

  it('appends -dev suffix in dev builds', async () => {
    const { getEnvAwareName } = await import('../../../src/common/config/appEnv');
    expect(getEnvAwareName('.aionui')).toBe('.aionui-dev');
    expect(getEnvAwareName('.aionui-config')).toBe('.aionui-config-dev');
  });

  it('returns baseName unchanged in release builds', async () => {
    vi.doMock('@/common/platform', () => ({
      getPlatformServices: () => ({ paths: { isPackaged: () => true } }),
    }));
    const { getEnvAwareName } = await import('../../../src/common/config/appEnv');
    expect(getEnvAwareName('.aionui')).toBe('.aionui');
    expect(getEnvAwareName('.aionui-config')).toBe('.aionui-config');
  });
});
