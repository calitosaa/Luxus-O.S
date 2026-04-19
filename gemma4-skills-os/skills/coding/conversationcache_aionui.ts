---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/conversation/utils/conversationCache.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { ipcBridge } from '@/common';
import type { TChatConversation } from '@/common/config/storage';
import { mutate } from 'swr';

export async function refreshConversationCache(conversationId: string): Promise<void> {
  const conversation = await ipcBridge.conversation.get.invoke({ id: conversationId }).catch((): null => null);
  if (!conversation) return;

  await mutate<TChatConversation>(`conversation/${conversationId}`, conversation, false);
}
