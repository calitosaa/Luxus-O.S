---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/fetchJSON.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

export async function fetchJSON<T>(
	url: string,
	options?: {
		fetch?: typeof window.fetch;
		allowNull?: boolean;
	}
): Promise<T> {
	const response = await (options?.fetch ?? fetch)(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
	}

	// Handle empty responses (which parse to null)
	const text = await response.text();
	if (!text || text.trim() === "") {
		if (options?.allowNull) {
			return null as T;
		}
		throw new Error(`Received empty response from ${url} but allowNull is not set to true`);
	}

	return JSON.parse(text);
}
