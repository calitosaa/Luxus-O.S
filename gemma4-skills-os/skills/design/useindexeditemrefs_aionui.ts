---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/hooks/ui/useIndexedItemRefs.ts
license: MIT
category: skills/design
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useRef } from 'react';

export function useIndexedItemRefs<T>(count: number) {
  const itemRefs = useRef<Array<T | null>>([]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, count);
  }, [count]);

  const setItemRef = useCallback(
    (index: number) => (node: T | null) => {
      itemRefs.current[index] = node;
    },
    []
  );

  return {
    itemRefs,
    setItemRef,
  };
}
