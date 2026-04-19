---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/api/v2/user/+server.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import type { RequestHandler } from "@sveltejs/kit";
import { superjsonResponse } from "$lib/server/api/utils/superjsonResponse";

export const GET: RequestHandler = async ({ locals }) => {
	return superjsonResponse(
		locals.user
			? {
					id: locals.user._id.toString(),
					username: locals.user.username,
					avatarUrl: locals.user.avatarUrl,
					email: locals.user.email,
					isAdmin: locals.user.isAdmin ?? false,
					isEarlyAccess: locals.user.isEarlyAccess ?? false,
				}
			: null
	);
};
