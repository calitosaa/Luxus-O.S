---
source_repo: https://github.com/beercss/beercss
source_file: src/dynamicColors/index.ts
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import { addRoute } from "../shared/router.js";
import dynamicColors from "./page.vue";

addRoute("/dynamic-colors", dynamicColors);
