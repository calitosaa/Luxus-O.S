---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/types/Report.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { ObjectId } from "mongodb";
import type { User } from "./User";
import type { Assistant } from "./Assistant";
import type { Timestamps } from "./Timestamps";

export interface Report extends Timestamps {
	_id: ObjectId;
	createdBy: User["_id"] | string;
	object: "assistant" | "tool";
	contentId: Assistant["_id"];
	reason?: string;
}
