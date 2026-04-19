---
source_repo: https://github.com/microsoft/playwright-mcp
source_file: packages/extension/playwright.config.ts
license: Apache-2.0
category: conectores-mcp/browser
imported_at: 2026-04-19
---

/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { defineConfig } from '@playwright/test';

import type { TestOptions } from '../playwright-mcp/tests/fixtures';
import type { ExtensionTestOptions } from './tests/extension-fixtures';

export default defineConfig<TestOptions & ExtensionTestOptions>({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  projects: [
    { name: 'chromium', use: { mcpBrowser: 'chromium', protocolVersion: 2 } },
    { name: 'chromium (legacy v1)', use: { mcpBrowser: 'chromium', protocolVersion: 1 } },
  ],
});
