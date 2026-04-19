---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/isVirtualKeyboard.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { browser } from "$app/environment";

export function isVirtualKeyboard(): boolean {
	if (!browser) return false;

	// Check for touch capability
	if (navigator.maxTouchPoints > 0 && screen.width <= 768) return true;

	// Check for touch events
	if ("ontouchstart" in window) return true;

	// Fallback to user agent string check
	const userAgent = navigator.userAgent.toLowerCase();

	return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}
