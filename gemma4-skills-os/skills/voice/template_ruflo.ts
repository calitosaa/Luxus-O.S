---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/types/Template.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { Message } from "./Message";

export type ChatTemplateInput = {
	messages: Pick<Message, "from" | "content" | "files">[];
	preprompt?: string;
};
