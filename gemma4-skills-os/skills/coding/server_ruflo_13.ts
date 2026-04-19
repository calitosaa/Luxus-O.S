---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/api/v2/models/[namespace]/subscribe/+server.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { error, type RequestHandler } from "@sveltejs/kit";
import { resolveModel } from "$lib/server/api/utils/resolveModel";
import { collections } from "$lib/server/database";
import { authCondition } from "$lib/server/auth";

export const POST: RequestHandler = async ({ params, locals }) => {
	if (!locals.sessionId) {
		error(401, "Unauthorized");
	}

	const model = await resolveModel(params.namespace ?? "");

	await collections.settings.updateOne(
		authCondition(locals),
		{
			$set: {
				activeModel: model.id,
				updatedAt: new Date(),
			},
			$setOnInsert: {
				createdAt: new Date(),
			},
		},
		{ upsert: true }
	);

	return new Response();
};
