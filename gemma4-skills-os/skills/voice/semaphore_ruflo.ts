---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/types/Semaphore.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { Timestamps } from "./Timestamps";

export interface Semaphore extends Timestamps {
	key: string;
	deleteAt: Date;
}

export enum Semaphores {
	CONVERSATION_STATS = "conversation.stats",
	CONFIG_UPDATE = "config.update",
	MIGRATION = "migration",
	TEST_MIGRATION = "test.migration",
	/**
	 * Note this lock name is used as `${Semaphores.OAUTH_TOKEN_REFRESH}:${sessionId}`
	 *
	 * not a global lock, but a lock for each session
	 */
	OAUTH_TOKEN_REFRESH = "oauth.token.refresh",
}
