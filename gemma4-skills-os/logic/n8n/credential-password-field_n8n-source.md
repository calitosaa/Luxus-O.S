---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/eslint-plugin-community-nodes/docs/rules/credential-password-field.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# Ensure credential fields with sensitive names have typeOptions.password = true (`@n8n/community-nodes/credential-password-field`)

💼 This rule is enabled in the following configs: ✅ `recommended`, ☑️ `recommendedWithoutN8nCloudSupport`.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

## Rule Details

Ensures that credential fields with names like "password", "secret", "token", or "key" are properly masked in the UI by having `typeOptions.password = true`.

## Examples

### ❌ Incorrect

```typescript
export class MyApiCredential implements ICredentialType {
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      default: '',
      // Missing typeOptions.password
    },
  ];
}
```

### ✅ Correct

```typescript
export class MyApiCredential implements ICredentialType {
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: { password: true },
      default: '',
    },
  ];
}
```
