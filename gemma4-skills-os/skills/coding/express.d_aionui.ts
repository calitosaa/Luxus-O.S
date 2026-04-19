---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/webserver/types/express.d.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */

import type { AuthUser } from '@process/webserver/auth/repository/UserRepository';

declare global {
  namespace Express {
    interface Request {
      user?: Pick<AuthUser, 'id' | 'username'>;
      cookies?: Record<string, string>;
      csrfToken?: () => string;
    }
  }
}
