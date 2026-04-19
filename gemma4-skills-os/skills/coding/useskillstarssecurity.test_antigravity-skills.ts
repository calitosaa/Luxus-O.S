---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: apps/web-app/src/hooks/__tests__/useSkillStarsSecurity.test.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';

describe('useSkillStars local-only persistence', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('only records a local save in browser storage', async () => {
    const { useSkillStars } = await import('../useSkillStars');
    const { result } = renderHook(() => useSkillStars('saved-locally'));

    await waitFor(() => {
      expect(result.current.isSaving).toBe(false);
    });

    await act(async () => {
      await result.current.handleSaveClick();
    });

    expect(result.current.hasSaved).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'saved_skills',
      JSON.stringify({ 'saved-locally': true }),
    );
  });
});
