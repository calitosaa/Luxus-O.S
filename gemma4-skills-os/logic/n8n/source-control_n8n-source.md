---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/cli/docs/commands/source-control.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# source-control

Interact with n8n's source control integration.

## `source-control pull`

Pull changes from the remote Git repository.

```bash
n8n-cli source-control pull
n8n-cli source-control pull --force
```

| Flag | Description |
|------|-------------|
| `--force` | Force pull, overwriting local changes |

Requires the Source Control feature to be licensed and connected to a Git remote.
