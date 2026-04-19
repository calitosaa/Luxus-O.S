---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/auth.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { goto } from "$app/navigation";
import { base } from "$app/paths";
import { page } from "$app/state";

/**
 * Redirects to the login page if the user is not authenticated
 * and the login feature is enabled.
 */
export function requireAuthUser(): boolean {
	if (page.data.loginEnabled && !page.data.user) {
		const next = page.url.pathname + page.url.search;
		const url = `${base}/login?next=${encodeURIComponent(next)}`;
		goto(url, { invalidateAll: true });
		return true;
	}
	return false;
}
