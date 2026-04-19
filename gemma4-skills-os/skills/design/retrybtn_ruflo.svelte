---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/components/RetryBtn.svelte
license: MIT
category: skills/design
imported_at: 2026-04-19
---

<script lang="ts">
	import CarbonRotate360 from "~icons/carbon/rotate-360";

	interface Props {
		classNames?: string;
		onClick?: () => void;
	}

	let { classNames = "", onClick }: Props = $props();
</script>

<button
	type="button"
	onclick={onClick}
	class="btn flex h-7 rounded-lg border bg-white px-2 py-1 text-sm text-gray-500 shadow-sm hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 {classNames}"
>
	<CarbonRotate360 class="mr-1 -translate-y-px text-[.65rem]" /> Retry
</button>
