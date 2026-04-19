---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/eslint-plugin-community-nodes/docs/rules/icon-validation.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# Validate node and credential icon files exist, are SVG format, and light/dark icons are different (`@n8n/community-nodes/icon-validation`)

💼 This rule is enabled in the following configs: ✅ `recommended`, ☑️ `recommendedWithoutN8nCloudSupport`.

💡 This rule is manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).

<!-- end auto-generated rule header -->

## Rule Details

Validates that your node and credential icon files exist, are in SVG format, and use the correct `file:` protocol. Icons must be different files when providing light/dark theme variants.

## Examples

### ❌ Incorrect

```typescript
export class MyNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'My Node',
    name: 'myNode',
    icon: 'icons/my-icon.png', // Missing 'file:' prefix, wrong format
    // ...
  };
}
```

```typescript
export class MyNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'My Node',
    name: 'myNode',
    icon: {
      light: 'file:icons/my-icon.svg',
      dark: 'file:icons/my-icon.svg', // Same file for both themes
    },
    // ...
  };
}
```

### ✅ Correct

```typescript
export class MyNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'My Node',
    name: 'myNode',
    icon: 'file:icons/my-service.svg', // Correct format
    // ...
  };
}
```

```typescript
export class MyNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'My Node',
    name: 'myNode',
    icon: {
      light: 'file:icons/my-service-light.svg',
      dark: 'file:icons/my-service-dark.svg', // Different files
    },
    // ...
  };
}
```
