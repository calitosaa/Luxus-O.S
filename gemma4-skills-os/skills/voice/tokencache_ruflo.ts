---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/types/TokenCache.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { Timestamps } from "./Timestamps";

export interface TokenCache extends Timestamps {
	tokenHash: string; // sha256 of the bearer token
	userId: string; // the matching hf user id
}
