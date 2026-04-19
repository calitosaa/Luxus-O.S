---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/ui/viewer/index.tsx
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element not found');
}

const root = createRoot(container);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
