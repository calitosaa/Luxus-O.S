---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/eslint-plugin-community-nodes/docs/rules/no-deprecated-workflow-functions.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# Disallow usage of deprecated functions and types from n8n-workflow package (`@n8n/community-nodes/no-deprecated-workflow-functions`)

💼 This rule is enabled in the following configs: ✅ `recommended`, ☑️ `recommendedWithoutN8nCloudSupport`.

💡 This rule is manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).

<!-- end auto-generated rule header -->

## Rule Details

Prevents usage of deprecated functions from n8n-workflow package and suggests modern alternatives.

## Examples

### ❌ Incorrect

```typescript
import { IRequestOptions } from 'n8n-workflow';

export class MyNode implements INodeType {
  async execute(this: IExecuteFunctions) {
    // Using deprecated request helper function
    const response = await this.helpers.request({
      method: 'GET',
      url: 'https://api.example.com/data',
    });

    // Using deprecated type
    const options: IRequestOptions = {
      method: 'POST',
      url: 'https://api.example.com/data',
    };

    return [this.helpers.returnJsonArray([response])];
  }
}
```

### ✅ Correct

```typescript
import { IHttpRequestOptions } from 'n8n-workflow';

export class MyNode implements INodeType {
  async execute(this: IExecuteFunctions) {
    // Using modern httpRequest helper function
    const response = await this.helpers.httpRequest({
      method: 'GET',
      url: 'https://api.example.com/data',
    });

    // Using modern type
    const options: IHttpRequestOptions = {
      method: 'POST',
      url: 'https://api.example.com/data',
    };

    return [this.helpers.returnJsonArray([response])];
  }
}
```
