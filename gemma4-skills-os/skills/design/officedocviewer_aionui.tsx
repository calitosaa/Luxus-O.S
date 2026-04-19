---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/conversation/Preview/components/viewers/OfficeDocViewer.tsx
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
import OfficeWatchViewer from './OfficeWatchViewer';

interface OfficeDocPreviewProps {
  filePath?: string;
  content?: string;
}

const OfficeDocPreview: React.FC<OfficeDocPreviewProps> = (props) => <OfficeWatchViewer docType='word' {...props} />;

export default OfficeDocPreview;
