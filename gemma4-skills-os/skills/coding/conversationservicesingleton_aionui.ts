---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/services/conversationServiceSingleton.ts
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
 * Singleton ConversationServiceImpl wired with a SqliteConversationRepository.
 * Extracted to a separate module to avoid circular dependencies.
 */

import { SqliteConversationRepository } from '@process/services/database/SqliteConversationRepository';
import { ConversationServiceImpl } from './ConversationServiceImpl';
import type { IConversationService } from './IConversationService';

export const conversationServiceSingleton: IConversationService = new ConversationServiceImpl(
  new SqliteConversationRepository()
);
