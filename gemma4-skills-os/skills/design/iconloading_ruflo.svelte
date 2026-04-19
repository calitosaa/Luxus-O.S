---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/components/icons/IconLoading.svelte
license: MIT
category: skills/design
imported_at: 2026-04-19
---

<script lang="ts">
	interface Props {
		classNames?: string;
	}

	let { classNames = "" }: Props = $props();
</script>

<div class={"inline-flex h-8 flex-none items-center gap-1 " + classNames}>
	<div
		class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400"
		style="animation-delay: 0.25s;"
	></div>
	<div
		class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400"
		style="animation-delay: 0.5s;"
	></div>
	<div
		class="h-1 w-1 flex-none animate-bounce rounded-full bg-gray-500 dark:bg-gray-400"
		style="animation-delay: 0.75s;"
	></div>
</div>
