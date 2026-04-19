---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/cli/docs/commands/project.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# project

Manage n8n projects and members.

## `project list`

List all projects.

```bash
n8n-cli project list
```

## `project get`

Get a project by ID.

```bash
n8n-cli project get proj-abc
```

## `project create`

Create a new project.

```bash
n8n-cli project create --name="AI Workflows"
```

## `project update`

Update a project's name.

```bash
n8n-cli project update proj-abc --name="New Name"
```

## `project delete`

Delete a project.

```bash
n8n-cli project delete proj-abc
```

## `project members`

List members of a project.

```bash
n8n-cli project members proj-abc
```

## `project add-member`

Add a user to a project with a role.

```bash
n8n-cli project add-member proj-abc --user=user-123 --role=project:editor
```

## `project remove-member`

Remove a user from a project.

```bash
n8n-cli project remove-member proj-abc --user=user-123
```
