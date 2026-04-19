---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/hashConv.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { Conversation } from "$lib/types/Conversation";
import { sha256 } from "./sha256";

export async function hashConv(conv: Conversation) {
	// messages contains the conversation message but only the immutable part
	const messages = conv.messages.map((message) => {
		return (({ from, id, content }) => ({ from, id, content }))(message);
	});

	const hash = await sha256(JSON.stringify(messages));
	return hash;
}
