---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/urlParams.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

const MAX_PARAM_LENGTH = 10_000;

export function sanitizeUrlParam(value: string | null): string | null {
	if (value == null) return null;

	const trimmed = value.trim();
	if (!trimmed.length) return null;
	if (trimmed.length > MAX_PARAM_LENGTH) return null;

	return trimmed;
}

export { MAX_PARAM_LENGTH };
