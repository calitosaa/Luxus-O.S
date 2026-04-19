---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/services/database/drivers/ISqliteDriver.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// src/process/services/database/drivers/ISqliteDriver.ts

export interface IStatement {
  get(...args: unknown[]): unknown;
  all(...args: unknown[]): unknown[];
  run(...args: unknown[]): { changes: number; lastInsertRowid: number | bigint };
}

export interface ISqliteDriver {
  prepare(sql: string): IStatement;
  exec(sql: string): void;
  pragma(sql: string, options?: { simple?: boolean }): unknown;
  transaction<T>(fn: (...args: unknown[]) => T): (...args: unknown[]) => T;
  close(): void;
}
