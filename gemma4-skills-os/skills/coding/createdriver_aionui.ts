---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/services/database/drivers/createDriver.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// src/process/services/database/drivers/createDriver.ts

import type { ISqliteDriver } from './ISqliteDriver';

export async function createDriver(dbPath: string): Promise<ISqliteDriver> {
  if (typeof process.versions['bun'] !== 'undefined') {
    // @ts-ignore -- BunSqliteDriver uses bun:sqlite which is not available in tsc's module resolution
    const { BunSqliteDriver } = await import('./BunSqliteDriver');
    return new BunSqliteDriver(dbPath);
  }
  const { BetterSqlite3Driver } = await import('./BetterSqlite3Driver');
  return new BetterSqlite3Driver(dbPath);
}
