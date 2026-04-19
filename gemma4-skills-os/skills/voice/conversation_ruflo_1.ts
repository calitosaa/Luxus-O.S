---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/types/Conversation.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { ObjectId } from "mongodb";
import type { Message } from "./Message";
import type { Timestamps } from "./Timestamps";
import type { User } from "./User";
import type { Assistant } from "./Assistant";

export interface Conversation extends Timestamps {
	_id: ObjectId;

	sessionId?: string;
	userId?: User["_id"];

	model: string;

	title: string;
	rootMessageId?: Message["id"];
	messages: Message[];

	meta?: {
		fromShareId?: string;
	};

	preprompt?: string;
	assistantId?: Assistant["_id"];

	userAgent?: string;
}
