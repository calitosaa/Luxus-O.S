---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/debounce.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

/**
 * A debounce function that works in both browser and Nodejs.
 * For pure Nodejs work, prefer the `Debouncer` class.
 */
export function debounce<T extends unknown[]>(
	callback: (...rest: T) => unknown,
	limit: number
): (...rest: T) => void {
	let timer: ReturnType<typeof setTimeout>;

	return function (...rest) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callback(...rest);
		}, limit);
	};
}
