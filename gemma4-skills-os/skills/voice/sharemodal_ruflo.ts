---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/stores/shareModal.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { writable } from "svelte/store";

function createShareModalStore() {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		open: () => set(true),
		close: () => set(false),
	};
}

export const shareModal = createShareModalStore();
