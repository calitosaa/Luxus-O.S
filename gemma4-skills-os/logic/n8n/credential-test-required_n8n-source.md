---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/eslint-plugin-community-nodes/docs/rules/credential-test-required.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# Ensure credentials have a credential test (`@n8n/community-nodes/credential-test-required`)

💼 This rule is enabled in the following configs: ✅ `recommended`, ☑️ `recommendedWithoutN8nCloudSupport`.

💡 This rule is manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).

<!-- end auto-generated rule header -->

## Rule Details

Ensures that your credentials include a `test` method to validate user credentials. This helps users verify their credentials are working correctly.

## Examples

### ❌ Incorrect

```typescript
export class MyApiCredential implements ICredentialType {
  name = 'myApi';
  displayName = 'My API';
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: { password: true },
      default: '',
    },
  ];
  // Missing test method
}
```

### ✅ Correct

```typescript
export class MyApiCredential implements ICredentialType {
  name = 'myApi';
  displayName = 'My API';
  properties: INodeProperties[] = [
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: { password: true },
      default: '',
    },
  ];

  test: ICredentialTestRequest = {
    request: {
      baseURL: 'https://api.myservice.com',
      url: '/user',
      method: 'GET',
    },
  };
}
```
