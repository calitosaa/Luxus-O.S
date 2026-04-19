---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/preload/petHitPreload.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('petHitAPI', {
  dragStart: () => ipcRenderer.send('pet:drag-start'),
  dragEnd: () => ipcRenderer.send('pet:drag-end'),
  click: (data: { side: string; count: number }) => ipcRenderer.send('pet:click', data),
  contextMenu: () => ipcRenderer.send('pet:context-menu'),
  setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) =>
    ipcRenderer.send('pet:set-ignore-mouse-events', ignore, options),
  onHitReset: (cb: () => void) => {
    ipcRenderer.on('pet:hit-reset', () => cb());
  },
});
