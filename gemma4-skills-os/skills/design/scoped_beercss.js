---
source_repo: https://github.com/beercss/beercss
source_file: build/scoped.js
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import fs from "fs";

function addScopedRule(css) {
  return css.replace(/\/\* begin scoped \*\//g, "/* begin scoped */\n\n.beer,\nbeer-css {").replace(/\/\* end scoped \*\//g, "/* end scoped */\n\n}");
}

function removeSpaces(css) {
  return css.replace(/\s{2,}|(\/\*.+\*\/)/g, "");
}

export default async function scoped() {
  try {
    let unminified = fs.readFileSync("./dist/cdn/beer.css", "utf-8");
    unminified = addScopedRule(unminified, ".beer");
    const minified = removeSpaces(unminified);
    
    fs.writeFileSync("./dist/cdn/beer.scoped.css", unminified);
    fs.writeFileSync("./dist/cdn/beer.scoped.min.css", minified);
  } catch (error) {
    console.error(error);
  }
}
