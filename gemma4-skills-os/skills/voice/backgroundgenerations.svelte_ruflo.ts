---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/stores/backgroundGenerations.svelte.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

export type BackgroundGeneration = {
	id: string;
	startedAt: number;
};

export const backgroundGenerationEntries = $state<BackgroundGeneration[]>([]);

export function addBackgroundGeneration(entry: BackgroundGeneration) {
	const index = backgroundGenerationEntries.findIndex(({ id }) => id === entry.id);

	if (index === -1) {
		backgroundGenerationEntries.push(entry);
		return;
	}

	backgroundGenerationEntries[index] = entry;
}

export function removeBackgroundGeneration(id: string) {
	const index = backgroundGenerationEntries.findIndex((entry) => entry.id === id);
	if (index === -1) return;

	backgroundGenerationEntries.splice(index, 1);
}

export function clearBackgroundGenerations() {
	backgroundGenerationEntries.length = 0;
}

export function hasBackgroundGeneration(id: string) {
	return backgroundGenerationEntries.some((entry) => entry.id === id);
}
