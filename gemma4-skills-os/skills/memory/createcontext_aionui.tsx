---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/utils/ui/createContext.tsx
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import type { FunctionComponent, PropsWithChildren } from 'react';
import React, { useEffect, useRef, useState } from 'react';

type FN<P> = FunctionComponent<PropsWithChildren<P>>;

type F2D<T> = T | ((data: T) => T);

export const createContext = <T extends any>(value: T): [() => T, FN<{ value: T }>, () => (value: F2D<T>) => void] => {
  const Context = React.createContext<{
    value: T;
    setValue: (value: T) => void;
  }>({
    value,
    setValue() {
      console.warn('');
    },
  });

  const useContext = () => {
    return React.useContext(Context).value;
  };

  const useUpdateContext = () => {
    return React.useContext(Context).setValue;
  };

  const DefaultValue = value;
  const ContextComponent: FN<{ value: T }> = (props) => {
    const [value, setValue] = useState(props.value || JSON.parse(JSON.stringify(DefaultValue)));
    const isFirst = useRef(true);
    useEffect(() => {
      if (isFirst.current) return;
      setValue(props.value);
      isFirst.current = false;
    }, [props.value]);
    return <Context.Provider value={{ value, setValue }}>{props.children}</Context.Provider>;
  };

  return [useContext, ContextComponent, useUpdateContext];
};

export default createContext;
