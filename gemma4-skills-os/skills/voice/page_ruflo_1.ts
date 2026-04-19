---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/models/[...model]/+page.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { base } from "$app/paths";

export async function load({ params, parent, fetch }) {
	await fetch(`${base}/api/v2/models/${params.model}/subscribe`, {
		method: "POST",
	});

	return {
		settings: await parent().then((data) => ({
			...data.settings,
			activeModel: params.model,
		})),
	};
}
