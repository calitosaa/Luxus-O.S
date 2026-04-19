---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/src/cli/commander-fix.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// Temporary workaround for TypeScript compiler bug with Commander overloads
import { Command as CommandConstructor } from 'commander';

// Export the Command class directly to avoid overload issues
export const Command = CommandConstructor;
export default Command;