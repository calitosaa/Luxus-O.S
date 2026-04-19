---
source_repo: https://github.com/beercss/beercss
source_file: src/cdn/elements/pages.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { addClass, parent, removeClass, queryAll } from "../utils";

export function updatePage(page: Element) {
  const container = parent(page);
  if (container) removeClass(queryAll(":scope > .page", container), "active");
  addClass(page, "active");
}