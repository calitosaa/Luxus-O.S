---
source_repo: https://github.com/aaronsb/google-workspace-mcp
source_file: src/executor/index.ts
license: MIT
category: conectores-mcp/google-workspace
imported_at: 2026-04-19
---

export { execute, gwsVersion } from './gws.js';
export type { GwsResult, GwsOptions } from './gws.js';
export { GwsError, GwsExitCode, parseGwsError } from './errors.js';
export { configDir, dataDir, credentialsDir, credentialPath, accountsFilePath, emailToSlug } from './paths.js';
