---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/cli/docs/commands/execution.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# execution

Manage workflow executions.

## `execution list`

List executions with optional filters.

```bash
n8n-cli execution list
n8n-cli execution list --workflow=1234
n8n-cli execution list --status=error --limit=10
```

| Flag | Description |
|------|-------------|
| `--workflow` | Filter by workflow ID |
| `--status` | Filter by status: `canceled`, `error`, `running`, `success`, `waiting` |
| `--limit` | Maximum number of results |

## `execution get`

Get execution details.

```bash
n8n-cli execution get 5678
n8n-cli execution get 5678 --include-data --format=json
```

| Flag | Description |
|------|-------------|
| `--include-data` | Include full node execution data |

## `execution retry`

Retry a failed execution.

```bash
n8n-cli execution retry 5678
```

## `execution stop`

Stop a running execution.

```bash
n8n-cli execution stop 5678
```

## `execution delete`

Delete an execution.

```bash
n8n-cli execution delete 5678
```
