---
source_repo: https://github.com/beercss/beercss
source_file: src/test/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { addRoute } from "../shared/router";
import test from "./page.vue";
import mainLayouts from "./mainLayouts.vue";

addRoute("/test/mainLayouts", mainLayouts);
addRoute("/test", test);
