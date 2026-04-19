---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/common/platform/register-node.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// Side-effect module. Import this as the FIRST import in server.ts.
// It must have no transitive dependencies that call getPlatformServices().
import { registerPlatformServices } from './index';
import { NodePlatformServices } from './NodePlatformServices';

registerPlatformServices(new NodePlatformServices());
