---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/api/v2/models/[namespace]/[model]/+server.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import type { RequestHandler } from "@sveltejs/kit";
import { superjsonResponse } from "$lib/server/api/utils/superjsonResponse";
import { resolveModel } from "$lib/server/api/utils/resolveModel";

export const GET: RequestHandler = async ({ params }) => {
	const model = await resolveModel(params.namespace ?? "", params.model ?? "");
	return superjsonResponse(model);
};
