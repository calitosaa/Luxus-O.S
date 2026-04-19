---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/preload/petPreload.ts
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

contextBridge.exposeInMainWorld('petAPI', {
  onStateChange: (cb: (state: string) => void) => {
    ipcRenderer.on('pet:state-changed', (_e, state: string) => cb(state));
  },
  onEyeMove: (cb: (data: { eyeDx: number; eyeDy: number; bodyDx: number; bodyRotate: number }) => void) => {
    ipcRenderer.on('pet:eye-move', (_e, data) => cb(data));
  },
  onResize: (cb: (size: number) => void) => {
    ipcRenderer.on('pet:resize', (_e, size: number) => cb(size));
  },
});
