---
source_repo: https://github.com/openclaw/openclaw
source_file: src/hooks/bundled/boot-md/HOOK.md
license: Apache-2.0
category: logic/openclaw
imported_at: 2026-04-19
---

---
name: boot-md
description: "Run BOOT.md on gateway startup"
homepage: https://docs.openclaw.ai/automation/hooks#boot-md
metadata:
  {
    "openclaw":
      {
        "emoji": "🚀",
        "events": ["gateway:startup"],
        "requires": { "config": ["workspace.dir"] },
        "install": [{ "id": "bundled", "kind": "bundled", "label": "Bundled with OpenClaw" }],
      },
  }
---

# Boot Checklist Hook

Runs `BOOT.md` at gateway startup for each configured agent scope, if the file exists in that
agent's resolved workspace.
