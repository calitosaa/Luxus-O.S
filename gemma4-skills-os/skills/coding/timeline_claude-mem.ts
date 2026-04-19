---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/services/sqlite/Timeline.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Timeline module re-exports
 * Provides time-based context queries for observations, sessions, and prompts
 *
 * grep-friendly: Timeline, getTimelineAroundTimestamp, getTimelineAroundObservation, getAllProjects
 */
import { logger } from '../../utils/logger.js';

export * from './timeline/queries.js';
