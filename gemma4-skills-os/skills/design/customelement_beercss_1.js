---
source_repo: https://github.com/beercss/beercss
source_file: build/customElement.js
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import fs from "fs";

function removeSpaces(css) {
  return css
    .replace(/\s{2,}|(\/\*.+\*\/)/g, "");
}

export default async function() {
  try {
    const unminified = fs.readFileSync("./src/cdn/customElement.js", "utf-8");
    const minified = removeSpaces(unminified);

    fs.writeFileSync("./dist/cdn/beer.custom-element.js", unminified);
    fs.writeFileSync("./dist/cdn/beer.custom-element.min.js", minified);
  } catch (error) {
    console.error(error);
  }
}
