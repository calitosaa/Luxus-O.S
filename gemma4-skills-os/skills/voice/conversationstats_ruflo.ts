---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/types/ConversationStats.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { Timestamps } from "./Timestamps";

export interface ConversationStats extends Timestamps {
	date: {
		at: Date;
		span: "day" | "week" | "month";
		field: "updatedAt" | "createdAt";
	};
	type: "conversation" | "message";
	/**  _id => number of conversations/messages in the month */
	distinct: "sessionId" | "userId" | "userOrSessionId" | "_id";
	count: number;
}
