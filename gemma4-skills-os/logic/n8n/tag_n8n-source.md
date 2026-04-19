---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/cli/docs/commands/tag.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# tag

Manage tags for organizing workflows.

## `tag list`

List all tags.

```bash
n8n-cli tag list
```

## `tag create`

Create a new tag.

```bash
n8n-cli tag create --name=production
```

## `tag update`

Update a tag's name.

```bash
n8n-cli tag update 1 --name=staging
```

## `tag delete`

Delete a tag.

```bash
n8n-cli tag delete 1
```
