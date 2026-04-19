---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/bridge/weixinLoginBridge.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserWindow, ipcMain } from 'electron';
import { WeixinLoginHandler } from '@process/channels/plugins/weixin/WeixinLoginHandler';

let handler: WeixinLoginHandler | null = null;

export function initWeixinLoginBridge(): void {
  const getWindow = () => BrowserWindow.getAllWindows()[0] ?? null;
  handler = new WeixinLoginHandler(getWindow);

  ipcMain.handle('weixin:login:start', async () => {
    try {
      return await handler!.startLogin();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(message, { cause: error });
    }
  });
}
