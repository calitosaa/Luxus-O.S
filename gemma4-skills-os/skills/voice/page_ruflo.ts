---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/settings/(nav)/[...model]/+page.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { base } from "$app/paths";
import { redirect } from "@sveltejs/kit";

export async function load({ parent, params }) {
	const data = await parent();

	const model = data.models.find((m: { id: string }) => m.id === params.model);

	if (!model || model.unlisted) {
		redirect(302, `${base}/settings`);
	}

	return data;
}
