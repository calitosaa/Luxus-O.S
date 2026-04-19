---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/privacy/+page.svelte
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

<script lang="ts">
	import { marked } from "marked";
	import privacy from "../../../PRIVACY.md?raw";
</script>

<div class="overflow-auto p-6">
	<div class="prose mx-auto px-4 pb-24 pt-6 dark:prose-invert md:pt-12">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html marked(privacy, { gfm: true })}
	</div>
</div>
