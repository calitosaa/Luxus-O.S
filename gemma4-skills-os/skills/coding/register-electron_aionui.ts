---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/common/platform/register-electron.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// Side-effect module. Import this as the FIRST import in src/process/index.ts.
import { registerPlatformServices } from './index';
import { ElectronPlatformServices } from './ElectronPlatformServices';

registerPlatformServices(new ElectronPlatformServices());
