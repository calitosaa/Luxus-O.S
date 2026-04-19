---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: tools/scripts/tests/setup_web_sync.test.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");

async function main() {
  const { copyIndexFiles } = require("../../scripts/setup_web.js");

  const root = fs.mkdtempSync(path.join(os.tmpdir(), "setup-web-sync-"));
  try {
    const source = path.join(root, "skills_index.json");
    const dest = path.join(root, "public", "skills.json");
    const backup = path.join(root, "public", "skills.json.backup");

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(source, JSON.stringify([{ id: "demo", category: "testing" }], null, 2));

    copyIndexFiles(source, dest, backup);

    assert.deepStrictEqual(
      JSON.parse(fs.readFileSync(dest, "utf8")),
      JSON.parse(fs.readFileSync(source, "utf8")),
    );
    assert.deepStrictEqual(
      JSON.parse(fs.readFileSync(backup, "utf8")),
      JSON.parse(fs.readFileSync(source, "utf8")),
    );
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
}

main();
