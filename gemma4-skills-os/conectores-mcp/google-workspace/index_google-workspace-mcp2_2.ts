---
source_repo: https://github.com/aaronsb/google-workspace-mcp
source_file: src/accounts/index.ts
license: MIT
category: conectores-mcp/google-workspace
imported_at: 2026-04-19
---

export { authenticateAccount } from './auth.js';
export type { AuthResult } from './auth.js';
export { hasCredential, readCredential, removeCredential, listCredentials, saveCredential } from './credentials.js';
export type { AuthorizedUserCredential } from './credentials.js';
export { listAccounts, getAccount, addAccount, removeAccount, authenticateAndAddAccount } from './registry.js';
export type { Account } from './registry.js';
export { getAccessToken, invalidateToken, warmTokenCache } from './token-service.js';
export { scopesForServices, ALL_SERVICES } from './oauth.js';
