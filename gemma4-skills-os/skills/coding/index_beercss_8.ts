---
source_repo: https://github.com/beercss/beercss
source_file: src/musicPlayer/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { addRoute } from "../shared/router.js";
import musicPlayer from "./page.vue";

addRoute("/music-player", musicPlayer);
