---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/deepestChild.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

export function deepestChild(el: HTMLElement): HTMLElement {
	if (el.lastElementChild && el.lastElementChild.nodeType !== Node.TEXT_NODE) {
		return deepestChild(el.lastElementChild as HTMLElement);
	}
	return el;
}
