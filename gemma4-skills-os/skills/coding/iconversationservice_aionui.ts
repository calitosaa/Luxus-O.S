---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/services/IConversationService.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

// src/process/services/IConversationService.ts

import type { TChatConversation, TProviderWithModel, ConversationSource } from '@/common/config/storage';
import type { AgentBackend } from '@/common/types/acpTypes';
import type { AgentType } from '@process/task/agentTypes';

export interface CreateConversationParams {
  type: AgentType;
  id?: string;
  name?: string;
  model: TProviderWithModel;
  source?: ConversationSource;
  channelChatId?: string;
  extra: {
    workspace?: string;
    customWorkspace?: boolean;
    defaultFiles?: string[];
    backend?: AgentBackend;
    cliPath?: string;
    webSearchEngine?: 'google' | 'default';
    agentName?: string;
    contextFileName?: string;
    presetRules?: string;
    enabledSkills?: string[];
    extraSkillPaths?: string[];
    excludeBuiltinSkills?: string[];
    presetAssistantId?: string;
    sessionMode?: string;
    isHealthCheck?: boolean;
    [key: string]: unknown;
  };
}

export interface MigrateConversationParams {
  conversation: TChatConversation;
  sourceConversationId?: string;
  migrateCron?: boolean;
}

export interface IConversationService {
  createConversation(params: CreateConversationParams): Promise<TChatConversation>;
  deleteConversation(id: string): Promise<void>;
  updateConversation(id: string, updates: Partial<TChatConversation>, mergeExtra?: boolean): Promise<void>;
  getConversation(id: string): Promise<TChatConversation | undefined>;
  createWithMigration(params: MigrateConversationParams): Promise<TChatConversation>;
  /** Returns all conversations without pagination. */
  listAllConversations(): Promise<TChatConversation[]>;
  /** List conversations spawned by a specific cron job. */
  getConversationsByCronJob(cronJobId: string): Promise<TChatConversation[]>;
}
