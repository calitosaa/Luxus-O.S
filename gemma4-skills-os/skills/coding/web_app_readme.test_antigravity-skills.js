---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: tools/scripts/tests/web_app_readme.test.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

const assert = require("assert");
const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..", "..");
const readme = fs.readFileSync(path.join(repoRoot, "apps", "web-app", "README.md"), "utf8");

assert.doesNotMatch(
  readme,
  /^# React \+ Vite$/m,
  "web app README should be project-specific, not the default Vite template",
);

for (const section of [
  "## What This App Does",
  "## Development",
  "## Environment Variables",
  "## Deploy Model",
  "## Testing",
]) {
  assert.match(
    readme,
    new RegExp(`^${section.replace(/[.*+?^${}()|[\]\\\\]/g, "\\$&")}$`, "m"),
    `web app README should document ${section}`,
  );
}
