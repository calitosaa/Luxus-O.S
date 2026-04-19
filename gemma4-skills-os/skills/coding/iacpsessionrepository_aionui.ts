---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/services/database/IAcpSessionRepository.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

export type AcpSessionRow = {
  conversation_id: string;
  agent_backend: string;
  agent_source: string;
  agent_id: string;
  session_id: string | null;
  session_status: 'idle' | 'active' | 'suspended' | 'error';
  session_config: string;
  last_active_at: number | null;
  suspended_at: number | null;
};

export type IAcpSessionRepository = {
  getSession(conversationId: string): AcpSessionRow | null;
  upsertSession(session: AcpSessionRow): void;
  updateSessionId(conversationId: string, sessionId: string): void;
  updateStatus(
    conversationId: string,
    status: 'idle' | 'active' | 'suspended' | 'error',
    suspendedAt?: number | null
  ): void;
  updateSessionConfig(conversationId: string, config: string): void;
  touchLastActive(conversationId: string): void;
  getSuspendedSessions(): AcpSessionRow[];
  deleteSession(conversationId: string): void;
};
