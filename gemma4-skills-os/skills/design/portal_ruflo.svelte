---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/components/Portal.svelte
license: MIT
category: skills/design
imported_at: 2026-04-19
---

<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	interface Props {
		children?: import("svelte").Snippet;
	}

	let { children }: Props = $props();

	let el: HTMLElement | undefined = $state();

	onMount(() => {
		el?.ownerDocument.body.appendChild(el);
	});

	onDestroy(() => {
		if (el?.parentNode) {
			el.parentNode.removeChild(el);
		}
	});
</script>

<div bind:this={el} class="contents" hidden>
	{@render children?.()}
</div>
