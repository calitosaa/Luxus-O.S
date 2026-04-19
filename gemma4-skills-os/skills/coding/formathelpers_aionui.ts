---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/team/prompts/formatHelpers.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import type { TeamAgent, MailboxMessage } from '../types';

/** Format mailbox messages, resolving sender names from the agents list. */
export function formatMessages(messages: MailboxMessage[], agents: TeamAgent[]): string {
  if (messages.length === 0) return 'No unread messages.';
  return messages
    .map((m) => {
      const filesNote = m.files?.length ? `\nFiles: ${m.files.join(', ')}` : '';
      if (m.fromAgentId === 'user') return `[From User] ${m.content}${filesNote}`;
      const sender = agents.find((a) => a.slotId === m.fromAgentId);
      return `[From ${sender?.agentName ?? m.fromAgentId}] ${m.content}${filesNote}`;
    })
    .join('\n');
}
