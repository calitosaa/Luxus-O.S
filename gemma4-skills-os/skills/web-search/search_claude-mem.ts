---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/services/worker/Search.ts
license: MIT
category: skills/web-search
imported_at: 2026-04-19
---

/**
 * Search.ts - Named re-export facade for search module
 *
 * Provides a clean import path for the search module.
 */
import { logger } from '../../utils/logger.js';

export * from './search/index.js';
