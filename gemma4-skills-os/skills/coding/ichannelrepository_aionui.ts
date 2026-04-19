---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/services/database/IChannelRepository.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  IChannelPluginConfig,
  IChannelPairingRequest,
  IChannelUser,
  IChannelSession,
} from '@process/channels/types';

export interface IChannelRepository {
  getChannelPlugins(): Promise<IChannelPluginConfig[]>;
  getPendingPairingRequests(): Promise<IChannelPairingRequest[]>;
  getChannelUsers(): Promise<IChannelUser[]>;
  deleteChannelUser(userId: string): Promise<void>;
  getChannelSessions(): Promise<IChannelSession[]>;
}
