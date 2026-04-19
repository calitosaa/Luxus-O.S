---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/eslint-plugin-community-nodes/docs/rules/no-restricted-imports.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# Disallow usage of restricted imports in community nodes (`@n8n/community-nodes/no-restricted-imports`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Rule Details

Prevents importing external dependencies that are not allowed on n8n Cloud. Community nodes running on n8n Cloud are restricted to a specific set of allowed modules for security and performance reasons.

**Allowed modules:** `n8n-workflow`, `lodash`, `moment`, `p-limit`, `luxon`, `zod`, `crypto`, `node:crypto`

Relative imports (starting with `./` or `../`) are always allowed.

## Examples

### ❌ Incorrect

```typescript
import axios from 'axios'; // External dependency not allowed
import { readFile } from 'fs'; // Node.js modules not in allowlist
const request = require('request'); // Same applies to require()

// Dynamic imports are also restricted
const module = await import('some-package');
```

### ✅ Correct

```typescript
import { IExecuteFunctions, INodeType } from 'n8n-workflow'; // Allowed
import { get } from 'lodash'; // Allowed
import moment from 'moment'; // Allowed
import { DateTime } from 'luxon'; // Allowed
import { createHash } from 'crypto'; // Allowed

import { MyHelper } from './helpers/MyHelper'; // Relative imports allowed
import config from '../config'; // Relative imports allowed

export class MyNode implements INodeType {
  // ... implementation
}
```

## When This Rule Doesn't Apply

This rule only applies to community nodes intended for n8n Cloud. If you're building nodes exclusively for self-hosted environments, you may disable this rule, but be aware that your package will not be compatible with n8n Cloud.
