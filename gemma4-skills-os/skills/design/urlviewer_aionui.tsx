---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/conversation/Preview/components/viewers/URLViewer.tsx
license: MIT
category: skills/design
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import WebviewHost from '@/renderer/components/media/WebviewHost';

interface URLViewerProps {
  /** URL to display */
  url: string;
  /** Optional title for the page */
  title?: string;
}

/**
 * URL 预览组件 - 用于在应用内预览网页（对话框预览面板）
 * URL Preview component - for previewing web pages within the app (conversation preview panel)
 *
 * Delegates to the shared WebviewHost with navigation bar enabled.
 */
const URLViewer: React.FC<URLViewerProps> = ({ url }) => {
  return <WebviewHost url={url} showNavBar className='bg-bg-1' />;
};

export default URLViewer;
