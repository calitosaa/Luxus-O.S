---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: apps/web-app/src/main.tsx
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { SkillProvider } from './context/SkillContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <SkillProvider>
      <App />
    </SkillProvider>
  </StrictMode>,
);
