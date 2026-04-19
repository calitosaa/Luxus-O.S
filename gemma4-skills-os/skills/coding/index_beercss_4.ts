---
source_repo: https://github.com/beercss/beercss
source_file: src/youtube/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { addRoute } from "../shared/router.js";
import youtube from "./page.vue";

addRoute("/youtube", youtube);
addRoute("/youtube/explore", youtube);
addRoute("/youtube/library", youtube);
addRoute("/youtube/subscriptions", youtube);
addRoute("/youtube/whats-hot", youtube);
