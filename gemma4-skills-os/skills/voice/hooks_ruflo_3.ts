---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/hooks.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { publicConfigTransporter } from "$lib/utils/PublicConfig.svelte";
import type { Transport } from "@sveltejs/kit";

export const transport: Transport = {
	PublicConfig: publicConfigTransporter,
};
