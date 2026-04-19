---
source_repo: https://github.com/openclaw/openclaw
source_file: extensions/open-prose/README.md
license: Apache-2.0
category: logic/openclaw
imported_at: 2026-04-19
---

# OpenProse (plugin)

Adds the OpenProse skill pack and `/prose` slash command.

## Enable

Bundled plugins are disabled by default. Enable this one:

```json
{
  "plugins": {
    "entries": {
      "open-prose": { "enabled": true }
    }
  }
}
```

Restart the Gateway after enabling.

## What you get

- `/prose` slash command (user-invocable skill)
- OpenProse VM semantics (`.prose` programs + multi-agent orchestration)
- Telemetry support (best-effort, per OpenProse spec)
