---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/server/apiToken.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { config } from "$lib/server/config";

export function getApiToken(locals: App.Locals | undefined) {
	if (config.USE_USER_TOKEN === "true") {
		if (!locals?.token) {
			throw new Error("User token not found");
		}
		return locals.token;
	}
	return config.OPENAI_API_KEY || config.HF_TOKEN;
}
