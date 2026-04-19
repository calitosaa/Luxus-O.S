---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/task/IWorkerTaskManager.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

// src/process/task/IWorkerTaskManager.ts

import type { AgentKillReason, IAgentManager } from './IAgentManager';
import type { BuildConversationOptions, AgentType } from './agentTypes';

export interface IWorkerTaskManager {
  getTask(id: string): IAgentManager | undefined;
  getOrBuildTask(id: string, options?: BuildConversationOptions): Promise<IAgentManager>;
  addTask(id: string, task: IAgentManager): void;
  kill(id: string, reason?: AgentKillReason): void;
  clear(): Promise<void>;
  listTasks(): Array<{ id: string; type: AgentType }>;
}
