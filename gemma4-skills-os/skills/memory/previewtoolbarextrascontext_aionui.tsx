---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/conversation/Preview/context/PreviewToolbarExtrasContext.tsx
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, type ReactNode } from 'react';

/**
 * 自定义工具栏插槽的内容结构
 * Custom toolbar slot content structure
 */
export interface PreviewToolbarExtras {
  left?: ReactNode;
  right?: ReactNode;
}

export interface PreviewToolbarExtrasContextValue {
  setExtras: (extras: PreviewToolbarExtras | null) => void;
}

const PreviewToolbarExtrasContext = createContext<PreviewToolbarExtrasContextValue | null>(null);

export const PreviewToolbarExtrasProvider = PreviewToolbarExtrasContext.Provider;

/**
 * 用于在预览内容中设置额外的工具栏元素
 * Hook for preview components to set extra toolbar elements
 */
export const usePreviewToolbarExtras = () => {
  return useContext(PreviewToolbarExtrasContext);
};
