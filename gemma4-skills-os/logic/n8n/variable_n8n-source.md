---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/cli/docs/commands/variable.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# variable

Manage n8n environment variables.

## `variable list`

List all variables.

```bash
n8n-cli variable list
```

## `variable create`

Create a variable.

```bash
n8n-cli variable create --key=API_ENDPOINT --value=https://api.example.com
```

## `variable update`

Update a variable's value.

```bash
n8n-cli variable update var-1 --key=API_ENDPOINT --value=https://new-api.example.com
```

## `variable delete`

Delete a variable.

```bash
n8n-cli variable delete var-1
```
