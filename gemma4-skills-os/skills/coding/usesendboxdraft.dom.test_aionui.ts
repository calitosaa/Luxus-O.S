---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: tests/unit/renderer/hooks/useSendBoxDraft.dom.test.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { act, renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { getSendBoxDraftHook } from '@/renderer/hooks/chat/useSendBoxDraft';

describe('getSendBoxDraftHook', () => {
  it('stores and clears draft data for a conversation', async () => {
    const useGeminiDraft = getSendBoxDraftHook('gemini', {
      _type: 'gemini',
      content: '',
      atPath: [],
      uploadFile: [],
    });

    const { result } = renderHook(() => useGeminiDraft('conv-1'));

    await waitFor(() => {
      expect(result.current.data).toBeUndefined();
    });

    act(() => {
      result.current.mutate((draft) => ({
        ...draft,
        content: 'draft message',
      }));
    });

    await waitFor(() => {
      expect(result.current.data?.content).toBe('draft message');
    });

    act(() => {
      result.current.mutate(() => undefined);
    });

    await waitFor(() => {
      expect(result.current.data).toBeUndefined();
    });
  });
});
