---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/getReturnFromGenerator.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

export async function getReturnFromGenerator<T, R>(generator: AsyncGenerator<T, R>): Promise<R> {
	let result: IteratorResult<T, R>;
	do {
		result = await generator.next();
	} while (!result.done); // Keep calling `next()` until `done` is true
	return result.value; // Return the final value
}
