---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: skills/ck/commands/info.mjs
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/usr/bin/env node
/**
 * ck — Context Keeper v2
 * info.mjs — quick read-only context snapshot
 *
 * Usage: node info.mjs [name|number]
 * stdout: compact info block
 * exit 0: success  exit 1: not found
 */

import { resolveContext, renderInfoBlock } from './shared.mjs';

const arg = process.argv[2];
const cwd = process.env.PWD || process.cwd();

const resolved = resolveContext(arg, cwd);
if (!resolved) {
  const hint = arg ? `No project matching "${arg}".` : 'This directory is not registered.';
  console.log(`${hint} Run /ck:init to register it.`);
  process.exit(1);
}

console.log('');
console.log(renderInfoBlock(resolved.context));
