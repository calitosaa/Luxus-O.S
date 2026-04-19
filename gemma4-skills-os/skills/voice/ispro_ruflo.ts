---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/stores/isPro.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { writable } from "svelte/store";

// null = unknown/loading, true = PRO, false = not PRO
export const isPro = writable<boolean | null>(null);
