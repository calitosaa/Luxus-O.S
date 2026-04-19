---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/utils/chat/chatMinimapEvents.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

export const CHAT_MESSAGE_JUMP_EVENT = 'aionui-chat-message-jump';

export interface ChatMessageJumpDetail {
  conversationId: string;
  messageId?: string;
  msgId?: string;
  align?: 'start' | 'center' | 'end';
  behavior?: 'auto' | 'smooth';
}

export function dispatchChatMessageJump(detail: ChatMessageJumpDetail) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent<ChatMessageJumpDetail>(CHAT_MESSAGE_JUMP_EVENT, {
      detail,
    })
  );
}
