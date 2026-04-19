---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/stores/titleUpdate.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { writable } from "svelte/store";

export interface TitleUpdate {
	convId: string;
	title: string;
}

export default writable<TitleUpdate | null>(null);
