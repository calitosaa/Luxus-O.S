---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/healthcheck/+server.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

export async function GET() {
	return new Response("OK", { status: 200 });
}
