---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/timeout.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

export const timeout = <T>(prom: Promise<T>, time: number): Promise<T> => {
	let timer: NodeJS.Timeout;
	return Promise.race([
		prom,
		new Promise<T>((_, reject) => {
			timer = setTimeout(() => reject(new Error(`Timeout after ${time / 1000} seconds`)), time);
		}),
	]).finally(() => clearTimeout(timer));
};
