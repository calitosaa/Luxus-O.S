---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/toolProgress.spec.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { describe, expect, test } from "vitest";

import { MessageToolUpdateType, MessageUpdateType } from "$lib/types/MessageUpdate";
import { formatToolProgressLabel } from "./toolProgress";

describe("formatToolProgressLabel", () => {
	test("returns empty string when progress is missing", () => {
		expect(formatToolProgressLabel(undefined)).toBe("");
	});

	test("formats progress with message", () => {
		expect(
			formatToolProgressLabel({
				type: MessageUpdateType.Tool,
				subtype: MessageToolUpdateType.Progress,
				uuid: "tool-1",
				progress: 3,
				total: 10,
				message: "Indexing",
			})
		).toBe("Indexing (3/10)");
	});

	test("formats progress without message", () => {
		expect(
			formatToolProgressLabel({
				type: MessageUpdateType.Tool,
				subtype: MessageToolUpdateType.Progress,
				uuid: "tool-2",
				progress: 7,
			})
		).toBe("Progress: 7");
	});

	test("formats progress with message and no total", () => {
		expect(
			formatToolProgressLabel({
				type: MessageUpdateType.Tool,
				subtype: MessageToolUpdateType.Progress,
				uuid: "tool-3",
				progress: 12,
				message: "ZeroGPU Initializing xxx",
			})
		).toBe("ZeroGPU Initializing xxx (12)");
	});
});
