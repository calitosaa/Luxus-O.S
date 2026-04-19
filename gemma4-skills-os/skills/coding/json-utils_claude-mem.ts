---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/utils/json-utils.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Shared JSON file utilities for claude-mem.
 *
 * Provides safe read/write helpers used across the CLI and services.
 */

import { existsSync, readFileSync } from 'fs';
import { logger } from './logger.js';

/**
 * Read a JSON file safely, returning a default value if the file
 * does not exist. Throws on corrupt JSON to prevent silent data loss
 * when callers merge and write back.
 *
 * @param filePath - Absolute path to the JSON file.
 * @param defaultValue - Value returned when the file is missing.
 * @returns The parsed JSON content, or `defaultValue` when file is missing.
 * @throws {Error} When the file exists but contains invalid JSON.
 */
export function readJsonSafe<T>(filePath: string, defaultValue: T): T {
  if (!existsSync(filePath)) return defaultValue;
  try {
    return JSON.parse(readFileSync(filePath, 'utf-8'));
  } catch (error) {
    throw new Error(`Corrupt JSON file, refusing to overwrite: ${filePath}`);
  }
}
