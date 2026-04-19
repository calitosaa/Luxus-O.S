---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: scripts/hooks/check-hook-enabled.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/usr/bin/env node
'use strict';

const { isHookEnabled } = require('../lib/hook-flags');

const [, , hookId, profilesCsv] = process.argv;
if (!hookId) {
  process.stdout.write('yes');
  process.exit(0);
}

process.stdout.write(isHookEnabled(hookId, { profiles: profilesCsv }) ? 'yes' : 'no');
