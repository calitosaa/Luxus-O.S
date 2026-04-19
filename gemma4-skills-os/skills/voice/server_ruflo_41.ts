---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/admin/stats/compute/+server.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { json } from "@sveltejs/kit";
import { logger } from "$lib/server/logger";
import { computeAllStats } from "$lib/jobs/refresh-conversation-stats";

// Triger like this:
// curl -X POST "http://localhost:5173/chat/admin/stats/compute" -H "Authorization: Bearer <ADMIN_API_SECRET>"

export async function POST() {
	computeAllStats().catch((e) => logger.error(e, "Error computing all stats"));
	return json(
		{
			message: "Stats job started",
		},
		{ status: 202 }
	);
}
