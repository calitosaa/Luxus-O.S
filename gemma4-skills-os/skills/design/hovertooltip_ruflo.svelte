---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/components/HoverTooltip.svelte
license: MIT
category: skills/design
imported_at: 2026-04-19
---

<script lang="ts">
	interface Props {
		label?: string;
		position?: "top" | "bottom" | "left" | "right";
		TooltipClassNames?: string;
		children?: import("svelte").Snippet;
	}

	let { label = "", position = "bottom", TooltipClassNames = "", children }: Props = $props();

	const positionClasses = {
		top: "bottom-full mb-2",
		bottom: "top-full mt-2",
		left: "right-full mr-2 top-1/2 -translate-y-1/2",
		right: "left-full ml-2 top-1/2 -translate-y-1/2",
	};
</script>

<div class="group/tooltip inline-block md:relative">
	{@render children?.()}

	<div
		class="
		invisible
		absolute
		z-10
		w-64
		whitespace-normal
		rounded-md
		bg-black
		p-2
		text-center
		text-white
		group-hover/tooltip:visible
		group-active/tooltip:visible
		max-sm:left-1/2
		max-sm:-translate-x-1/2
		{positionClasses[position]}
		{TooltipClassNames}
	  "
	>
		{label}
	</div>
</div>
