---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/scripts/start-web-ui.js
license: MIT
category: skills/design
imported_at: 2026-04-19
---

#!/usr/bin/env node

/**
 * Simple startup script for Claude Code Web UI
 * Usage: node start-web-ui.js [port]
 */

import { startWebServer } from './src/cli/simple-commands/web-server.js';

const port = process.argv[2] ? parseInt(process.argv[2]) : 3000;

console.log('🚀 Starting Claude Code Web UI...');
console.log();

await startWebServer(port);