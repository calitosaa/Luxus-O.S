---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/eslint-plugin-community-nodes/docs/rules/package-name-convention.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# Enforce correct package naming convention for n8n community nodes (`@n8n/community-nodes/package-name-convention`)

💼 This rule is enabled in the following configs: ✅ `recommended`, ☑️ `recommendedWithoutN8nCloudSupport`.

💡 This rule is manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).

<!-- end auto-generated rule header -->

## Rule Details

Validates that your package name follows the correct n8n community node naming convention. Package names must start with `n8n-nodes-` and can optionally be scoped.

## Examples

### ❌ Incorrect

```json
{
  "name": "my-service-integration"
}
```

```json
{
  "name": "nodes-my-service"
}
```

```json
{
  "name": "@company/my-service"
}
```

### ✅ Correct

```json
{
  "name": "n8n-nodes-my-service"
}
```

```json
{
  "name": "@company/n8n-nodes-my-service"
}
```

## Best Practices

- Use descriptive service names: `n8n-nodes-github` rather than `n8n-nodes-api`
- For company packages, use your organization scope: `@mycompany/n8n-nodes-internal-tool`
