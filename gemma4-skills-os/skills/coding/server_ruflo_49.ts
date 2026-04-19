---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/__debug/openai/+server.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { json } from "@sveltejs/kit";
import { config } from "$lib/server/config";
const DEFAULT_OPENAI_BASE = "https://router.huggingface.co/v1";

export async function GET() {
	const base = (config.OPENAI_BASE_URL || DEFAULT_OPENAI_BASE).replace(/\/$/, "");
	try {
		const res = await fetch(`${base}/models`);
		const text = await res.text();
		let length: number | null = null;
		try {
			const parsed = JSON.parse(text);
			length = Array.isArray(parsed?.data) ? parsed.data.length : null;
		} catch (_err) {
			length = null; // ignore parse errors
		}
		return json({ base, status: res.status, ok: res.ok, length, sample: text.slice(0, 1000) });
	} catch (e) {
		return json({ base, error: String(e) });
	}
}
