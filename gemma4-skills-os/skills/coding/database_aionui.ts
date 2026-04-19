---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/common/types/database.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import type { TMessage } from '../chat/chatLib';
import type { TChatConversation } from '../config/storage';

export interface IMessageSearchItem {
  conversation: TChatConversation;
  messageId: string;
  messageType: TMessage['type'];
  messageCreatedAt: number;
  previewText: string;
}

export interface IMessageSearchResponse {
  items: IMessageSearchItem[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
