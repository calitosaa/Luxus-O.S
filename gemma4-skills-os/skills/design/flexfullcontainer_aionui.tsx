---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/components/layout/FlexFullContainer.tsx
license: MIT
category: skills/design
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import type { PropsWithChildren } from 'react';
import React from 'react';

import classNames from 'classnames';

const FlexFullContainer: React.FC<
  PropsWithChildren<{
    className?: string;
    containerClassName?: string;
  }>
> = (props) => {
  return (
    <div className={classNames('flex-1 relative min-h-0', props.className)}>
      <div className={classNames('absolute size-full', props.containerClassName)}>{props.children}</div>
    </div>
  );
};

export default FlexFullContainer;
