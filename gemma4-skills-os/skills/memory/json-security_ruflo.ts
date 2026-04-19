---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/memory/src/json-security.ts
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

/**
 * JSON security utilities for memory backends.
 * Prevents prototype pollution when parsing JSON from database rows.
 *
 * @module v3/memory/json-security
 */

const DANGEROUS_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

/**
 * Parse JSON safely, stripping keys that enable prototype pollution.
 * Drop-in replacement for JSON.parse that filters __proto__, constructor, prototype.
 */
export function safeJsonParse<T = unknown>(content: string): T {
  return JSON.parse(content, (key, value) => {
    if (DANGEROUS_KEYS.has(key)) {
      return undefined;
    }
    return value;
  }) as T;
}
