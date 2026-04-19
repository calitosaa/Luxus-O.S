---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: tests/unit/common/i18n-config.test.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { SUPPORTED_LANGUAGES } from '@/common/config/i18n';

describe('i18n config', () => {
  it('should include uk-UA in supported languages', () => {
    expect(SUPPORTED_LANGUAGES).toContain('uk-UA');
  });

  it('should have zh-CN as the first language in this project', () => {
    expect(SUPPORTED_LANGUAGES[0]).toBe('zh-CN');
  });
});
