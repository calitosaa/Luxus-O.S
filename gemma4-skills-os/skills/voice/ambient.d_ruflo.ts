---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/ambient.d.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

declare module "*.ttf" {
	const value: ArrayBuffer;
	export default value;
}

// Legacy helpers removed: web search support is deprecated, so we intentionally
// avoid leaking those shapes into the global ambient types.
