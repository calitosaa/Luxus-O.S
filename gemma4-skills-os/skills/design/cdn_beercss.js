---
source_repo: https://github.com/beercss/beercss
source_file: build/cdn.js
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import unminified from "./unminified.js";
import minified from "./minified.js";
import scoped from "./scoped.js";
import customElement from "./customElement.js";
import readme from "./readme.js";

try {
  await unminified();
  await minified();
  await scoped();
  await customElement();
  await readme();
} catch(error) {
  console.error(error);
}
