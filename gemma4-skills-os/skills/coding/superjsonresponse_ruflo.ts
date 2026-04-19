---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/server/api/utils/superjsonResponse.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import superjson from "superjson";

/**
 * Create a JSON response serialized with superjson.
 * Matches the wire format of the former Elysia `mapResponse` hook.
 */
export function superjsonResponse(data: unknown, init?: ResponseInit): Response {
	return new Response(superjson.stringify(data), {
		...init,
		headers: {
			"Content-Type": "application/json",
			...init?.headers,
		},
	});
}
