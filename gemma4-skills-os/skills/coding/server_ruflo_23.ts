---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/api/v2/user/reports/+server.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import type { RequestHandler } from "@sveltejs/kit";
import { superjsonResponse } from "$lib/server/api/utils/superjsonResponse";
import { collections } from "$lib/server/database";

export const GET: RequestHandler = async ({ locals }) => {
	if (!locals.user || !locals.sessionId) {
		return superjsonResponse([]);
	}

	const reports = await collections.reports
		.find({
			createdBy: locals.user?._id ?? locals.sessionId,
		})
		.toArray();

	return superjsonResponse(reports);
};
