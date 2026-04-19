---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/eslint-plugin-community-nodes/docs/rules/node-usable-as-tool.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# Ensure node classes have usableAsTool property (`@n8n/community-nodes/node-usable-as-tool`)

💼 This rule is enabled in the following configs: ✅ `recommended`, ☑️ `recommendedWithoutN8nCloudSupport`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

## Rule Details

Ensures your nodes declare whether they can be used as tools in AI workflows. This property helps n8n determine if your node is suitable for AI-assisted automation.

## Examples

### ❌ Incorrect

```typescript
export class MyNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'My Node',
    name: 'myNode',
    group: ['input'],
    version: 1,
    // Missing usableAsTool property
    properties: [],
  };
}
```

### ✅ Correct

```typescript
export class MyNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'My Node',
    name: 'myNode',
    group: ['input'],
    version: 1,
    usableAsTool: true,
    properties: [],
  };
}
```
