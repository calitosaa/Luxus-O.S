---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/server/textGeneration/utils/routing.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import type { EndpointMessage } from "../../endpoints/endpoints";

const ROUTER_REASONING_REGEX = /<think>[\s\S]*?(?:<\/think>|$)/g;

export function stripReasoningBlocks(text: string): string {
	const stripped = text.replace(ROUTER_REASONING_REGEX, "");
	return stripped === text ? text : stripped.trim();
}

export function stripReasoningFromMessageForRouting(message: EndpointMessage): EndpointMessage {
	const clone = { ...message } as EndpointMessage & { reasoning?: string };
	if ("reasoning" in clone) {
		delete clone.reasoning;
	}
	const content =
		typeof message.content === "string" ? stripReasoningBlocks(message.content) : message.content;
	return {
		...clone,
		content,
	};
}
