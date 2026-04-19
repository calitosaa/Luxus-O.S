---
source_repo: https://github.com/openclaw/openclaw
source_file: docs/cli/docs.md
license: Apache-2.0
category: logic/openclaw
imported_at: 2026-04-19
---

---
summary: "CLI reference for `openclaw docs` (search the live docs index)"
read_when:
  - You want to search the live OpenClaw docs from the terminal
title: "docs"
---

# `openclaw docs`

Search the live docs index.

Arguments:

- `[query...]`: search terms to send to the live docs index

Examples:

```bash
openclaw docs
openclaw docs browser existing-session
openclaw docs sandbox allowHostControl
openclaw docs gateway token secretref
```

Notes:

- With no query, `openclaw docs` opens the live docs search entrypoint.
- Multi-word queries are passed through as one search request.
