---
source_repo: https://github.com/beercss/beercss
source_file: src/uber/interfaces.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { type ILayout } from "../shared/interfaces";

export interface IUber extends ILayout {
  from: string,
  to: string,
  street: string,
}
