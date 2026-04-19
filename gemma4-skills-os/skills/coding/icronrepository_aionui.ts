---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/services/cron/ICronRepository.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CronJob } from './CronStore';

export interface ICronRepository {
  insert(job: CronJob): Promise<void>;
  update(jobId: string, updates: Partial<CronJob>): Promise<void>;
  delete(jobId: string): Promise<void>;
  getById(jobId: string): Promise<CronJob | null>;
  listAll(): Promise<CronJob[]>;
  listEnabled(): Promise<CronJob[]>;
  listByConversation(conversationId: string): Promise<CronJob[]>;
  deleteByConversation(conversationId: string): Promise<number>;
}
