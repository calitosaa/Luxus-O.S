---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/bridge/dialogBridge.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserWindow, dialog } from 'electron';
import { ipcBridge } from '@/common';

export function initDialogBridge(): void {
  ipcBridge.dialog.showOpen.provider((options) => {
    // Get the focused window or the first available window as parent
    // This ensures the dialog appears in front on Windows and has proper modal behavior
    const parentWindow = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0];
    const dialogOptions = {
      defaultPath: options?.defaultPath,
      properties: options?.properties,
    };

    const showDialogPromise = parentWindow
      ? dialog.showOpenDialog(parentWindow, dialogOptions)
      : dialog.showOpenDialog(dialogOptions);

    return showDialogPromise.then((res) => {
      return res.filePaths;
    });
  });
}
