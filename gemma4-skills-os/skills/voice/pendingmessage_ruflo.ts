---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/stores/pendingMessage.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { writable } from "svelte/store";

export const pendingMessage = writable<
	| {
			content: string;
			files: File[];
	  }
	| undefined
>();
