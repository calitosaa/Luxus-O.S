---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/types/SharedConversation.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { Conversation } from "./Conversation";

export type SharedConversation = Pick<
	Conversation,
	"model" | "title" | "rootMessageId" | "messages" | "preprompt" | "createdAt" | "updatedAt"
> & {
	_id: string;
	hash: string;
};
