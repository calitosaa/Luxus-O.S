---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/eslint-plugin-community-nodes/docs/rules/require-continue-on-fail.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# Require continueOnFail() handling in execute() methods of node classes (`@n8n/community-nodes/require-continue-on-fail`)

💼 This rule is enabled in the following configs: ✅ `recommended`, ☑️ `recommendedWithoutN8nCloudSupport`.

<!-- end auto-generated rule header -->

## Rule Details

Ensures that `execute()` methods in node classes include a `this.continueOnFail()` check. Without this, a single item error will abort the entire workflow instead of allowing execution to continue past the failing item.

## Examples

### ❌ Incorrect

```typescript
export class MyNode implements INodeType {
  description: INodeTypeDescription = { /* ... */ };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];
    for (let i = 0; i < items.length; i++) {
      // No error handling — one bad item kills the whole workflow
      const result = await someApiCall(items[i]);
      returnData.push({ json: result });
    }
    return [returnData];
  }
}
```

### ✅ Correct

```typescript
export class MyNode implements INodeType {
  description: INodeTypeDescription = { /* ... */ };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];
    for (let i = 0; i < items.length; i++) {
      try {
        const result = await someApiCall(items[i]);
        returnData.push({ json: result });
      } catch (error) {
        if (this.continueOnFail()) {
          returnData.push({ json: { error: error.message }, pairedItem: { item: i } });
          continue;
        }
        throw error;
      }
    }
    return [returnData];
  }
}
```
