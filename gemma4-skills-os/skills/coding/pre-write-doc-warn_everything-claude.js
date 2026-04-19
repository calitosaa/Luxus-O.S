---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: scripts/hooks/pre-write-doc-warn.js
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/usr/bin/env node
/**
 * Backward-compatible doc warning hook entrypoint.
 * Kept for consumers that still reference pre-write-doc-warn.js directly.
 */

'use strict';

require('./doc-file-warning.js');
