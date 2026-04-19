---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/types/AbortedGeneration.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

// Ideally shouldn't be needed, see https://github.com/huggingface/chat-ui/pull/88#issuecomment-1523173850

import type { Conversation } from "./Conversation";
import type { Timestamps } from "./Timestamps";

export interface AbortedGeneration extends Timestamps {
	conversationId: Conversation["_id"];
}
