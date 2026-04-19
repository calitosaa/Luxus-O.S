---
source_repo: https://github.com/openclaw/openclaw
source_file: extensions/minimax/README.md
license: Apache-2.0
category: logic/openclaw
imported_at: 2026-04-19
---

# MiniMax (OpenClaw plugin)

Bundled MiniMax plugin for both:

- API-key provider setup (`minimax`)
- Token Plan OAuth setup (`minimax-portal`)

## Enable

```bash
openclaw plugins enable minimax
```

Restart the Gateway after enabling.

```bash
openclaw gateway restart
```

## Authenticate

OAuth:

```bash
openclaw models auth login --provider minimax-portal --set-default
```

API key:

```bash
openclaw setup --wizard --auth-choice minimax-global-api
```

## Notes

- MiniMax OAuth uses a user-code login flow.
- OAuth currently targets the Token Plan path.
