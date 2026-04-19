---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/utils/chat/messageHistory.ts
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

import type { TMessage } from '@/common/chat/chatLib';

export function getConversationInputHistory(messages: TMessage[], conversationId?: string): string[] {
  if (!conversationId) {
    return [];
  }

  const history: string[] = [];
  const seen = new Set<string>();

  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (
      message.conversation_id !== conversationId ||
      message.type !== 'text' ||
      message.position !== 'right' ||
      !message.content.content.trim()
    ) {
      continue;
    }

    const content = message.content.content;
    if (seen.has(content)) {
      continue;
    }

    seen.add(content);
    history.push(content);
  }

  return history;
}

export function isCaretOnFirstLine(textarea: HTMLTextAreaElement): boolean {
  const selectionStart = textarea.selectionStart ?? 0;
  return !textarea.value.slice(0, selectionStart).includes('\n');
}

export function isCaretOnLastLine(textarea: HTMLTextAreaElement): boolean {
  const selectionEnd = textarea.selectionEnd ?? textarea.value.length;
  return !textarea.value.slice(selectionEnd).includes('\n');
}
