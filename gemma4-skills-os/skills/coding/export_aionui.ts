---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/services/database/export.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Main database exports
 * Use this file to import database functionality throughout the app
 */

export { AionUIDatabase, getDatabase, closeDatabase } from './index';
export {
  runMigrations,
  rollbackMigrations,
  getMigrationHistory,
  isMigrationApplied,
  type IMigration,
} from './migrations';

export type {
  // Database-specific types
  IUser,
  IQueryResult,
  IPaginatedResult,
  // Business types (re-exported for convenience)
  TChatConversation,
  TMessage,
  IConfigStorageRefer,
  // Database row types (for advanced usage)
  IConversationRow,
  IMessageRow,
  IConfigRow,
} from './types';

// Re-export conversion functions
export { conversationToRow, rowToConversation, messageToRow, rowToMessage } from './types';
