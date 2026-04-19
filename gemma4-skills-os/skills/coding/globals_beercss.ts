---
source_repo: https://github.com/beercss/beercss
source_file: test/globals.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { JSDOM } from "jsdom";

const dom = new JSDOM();
global.document = dom.window.document;
global.getComputedStyle = dom.window.getComputedStyle;
global.NodeList = dom.window.NodeList;