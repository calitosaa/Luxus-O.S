---
source_repo: https://github.com/beercss/beercss
source_file: src/gmail/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { addRoute } from "../shared/router.js";
import gmail from "./page.vue";

addRoute("/gmail", gmail);
addRoute("/gmail/drafts", gmail);
addRoute("/gmail/important", gmail);
addRoute("/gmail/sent", gmail);
addRoute("/gmail/snoozed", gmail);
addRoute("/gmail/spam", gmail);
