---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/tree/isMessageId.spec.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

import { describe, expect, it } from "vitest";
import { isMessageId } from "./isMessageId";
import { v4 } from "uuid";

describe("isMessageId", () => {
	it("should return true for a valid message id", () => {
		expect(isMessageId(v4())).toBe(true);
	});
	it("should return false for an invalid message id", () => {
		expect(isMessageId("1-2-3-4")).toBe(false);
	});
	it("should return false for an empty string", () => {
		expect(isMessageId("")).toBe(false);
	});
});
