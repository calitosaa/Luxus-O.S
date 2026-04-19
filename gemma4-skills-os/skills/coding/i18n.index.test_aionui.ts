---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: tests/unit/common/i18n.index.test.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest';
import { SUPPORTED_LANGUAGES, normalizeLanguageCode } from '@/common/config/i18n';

describe('common i18n config module', () => {
  it('should have uk-UA as a supported language', () => {
    expect(SUPPORTED_LANGUAGES).toContain('uk-UA');
  });

  it('should normalize uk-UA correctly', () => {
    // Test if normalizeLanguageCode handles uk-UA or similar variants
    expect(normalizeLanguageCode('uk')).toBe('uk-UA');
    expect(normalizeLanguageCode('uk-UA')).toBe('uk-UA');
    expect(normalizeLanguageCode('UK-UA')).toBe('uk-UA');
  });

  it('should have enough supported languages', () => {
    expect(SUPPORTED_LANGUAGES.length).toBeGreaterThan(6);
  });
});
