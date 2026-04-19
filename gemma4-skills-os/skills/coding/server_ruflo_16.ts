---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/api/v2/models/old/+server.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import type { RequestHandler } from "@sveltejs/kit";
import { superjsonResponse } from "$lib/server/api/utils/superjsonResponse";
import type { GETOldModelsResponse } from "$lib/server/api/types";

export const GET: RequestHandler = async () => {
	return superjsonResponse([] as GETOldModelsResponse);
};
