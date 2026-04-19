---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/components/base/StepsWrapper.tsx
license: MIT
category: skills/design
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { Steps } from '@arco-design/web-react';
import type { StepsProps } from '@arco-design/web-react/es/Steps';
import React from 'react';

interface StepsWrapperProps extends StepsProps {
  className?: string;
}

const StepsWrapper: React.FC<StepsWrapperProps> & { Step: typeof Steps.Step } = ({ className, ...props }) => {
  return <Steps {...props} className={`aionui-steps ${className || ''}`} />;
};

StepsWrapper.Step = Steps.Step;

export default StepsWrapper;
