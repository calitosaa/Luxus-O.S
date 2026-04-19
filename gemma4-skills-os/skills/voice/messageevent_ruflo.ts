---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/types/MessageEvent.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { Session } from "./Session";
import type { Timestamps } from "./Timestamps";
import type { User } from "./User";

export interface MessageEvent extends Pick<Timestamps, "createdAt"> {
	userId: User["_id"] | Session["sessionId"];
	ip?: string;
	expiresAt: Date;
	type: "message" | "export";
}
