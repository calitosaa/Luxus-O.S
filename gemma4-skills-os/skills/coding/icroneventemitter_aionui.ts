---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/services/cron/ICronEventEmitter.ts
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

export interface ICronEventEmitter {
  emitJobCreated(job: CronJob): void;
  emitJobUpdated(job: CronJob): void;
  emitJobExecuted(jobId: string, status: 'ok' | 'error' | 'skipped' | 'missed', error?: string): void;
  emitJobRemoved(jobId: string): void;
  showNotification(params: { title: string; body: string; conversationId: string }): Promise<void>;
}
