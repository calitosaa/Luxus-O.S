---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/conversation/Preview/components/viewers/ExcelViewer.tsx
license: MIT
category: skills/files
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import OfficeWatchViewer from './OfficeWatchViewer';

interface ExcelPreviewProps {
  filePath?: string;
  content?: string;
}

const ExcelPreview: React.FC<ExcelPreviewProps> = (props) => <OfficeWatchViewer docType='excel' {...props} />;

export default ExcelPreview;
