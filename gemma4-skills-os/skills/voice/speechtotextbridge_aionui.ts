---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/bridge/speechToTextBridge.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { ipcBridge } from '@/common';
import { SpeechToTextService } from './services/SpeechToTextService';

export function initSpeechToTextBridge(): void {
  ipcBridge.speechToText.transcribe.provider(async (request) => {
    return SpeechToTextService.transcribe(request);
  });
}
