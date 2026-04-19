---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/login/+server.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { triggerOauthFlow } from "$lib/server/auth";

export async function GET(event) {
	return await triggerOauthFlow(event);
}
