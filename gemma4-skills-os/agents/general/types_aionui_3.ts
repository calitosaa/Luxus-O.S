---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/agent/types.ts
license: MIT
category: agents/general
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

// Re-export from canonical location in common/types
export type {
  DetectedAgentKind,
  DetectedAgent,
  AcpDetectedAgent,
  GeminiDetectedAgent,
  RemoteDetectedAgent,
  AionrsDetectedAgent,
  NanobotDetectedAgent,
  OpenClawDetectedAgent,
  RemoteAgentProtocol,
  RemoteAgentAuthType,
} from '@/common/types/detectedAgent';

export { isAgentKind } from '@/common/types/detectedAgent';
