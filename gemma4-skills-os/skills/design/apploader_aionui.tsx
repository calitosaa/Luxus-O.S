---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/components/layout/AppLoader.tsx
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import { Spin } from '@arco-design/web-react';
import React from 'react';

const AppLoader: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Spin dot />
    </div>
  );
};

export default AppLoader;
