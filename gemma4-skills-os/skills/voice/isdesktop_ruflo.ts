---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/isDesktop.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

// Approximate width from which we disable autofocus
const TABLET_VIEWPORT_WIDTH = 768;

export function isDesktop(window: Window) {
	const { innerWidth } = window;
	return innerWidth > TABLET_VIEWPORT_WIDTH;
}
