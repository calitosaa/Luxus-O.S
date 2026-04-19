---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/types/MigrationResult.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { ObjectId } from "mongodb";

export interface MigrationResult {
	_id: ObjectId;
	name: string;
	status: "success" | "failure" | "ongoing";
}
