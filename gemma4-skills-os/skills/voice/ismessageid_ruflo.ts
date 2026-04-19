---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/tree/isMessageId.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { Message } from "$lib/types/Message";

export function isMessageId(id: string): id is Message["id"] {
	return id.split("-").length === 5;
}
