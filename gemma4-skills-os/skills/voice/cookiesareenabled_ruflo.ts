---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/cookiesAreEnabled.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { browser } from "$app/environment";

export function cookiesAreEnabled(): boolean {
	if (!browser) return false;
	if (navigator.cookieEnabled) return navigator.cookieEnabled;

	// Create cookie
	document.cookie = "cookietest=1";
	const ret = document.cookie.indexOf("cookietest=") != -1;
	// Delete cookie
	document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
	return ret;
}
