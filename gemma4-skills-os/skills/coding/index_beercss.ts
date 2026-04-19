---
source_repo: https://github.com/beercss/beercss
source_file: src/netflix/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { addRoute } from "../shared/router";
import netflix from "./page.vue";

addRoute("/netflix", netflix);
