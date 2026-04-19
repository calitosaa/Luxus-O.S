---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/parseStringToList.ts
license: MIT
category: skills/files
imported_at: 2026-04-19
---

export function parseStringToList(links: unknown): string[] {
	if (typeof links !== "string") {
		throw new Error("Expected a string");
	}

	return links
		.split(",")
		.map((link) => link.trim())
		.filter((link) => link.length > 0);
}
