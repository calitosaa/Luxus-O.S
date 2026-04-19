---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: .opencode/tools/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * ECC Custom Tools for OpenCode
 *
 * These tools extend OpenCode with additional capabilities.
 */

// Re-export all tools
export { default as runTests } from "./run-tests.js"
export { default as checkCoverage } from "./check-coverage.js"
export { default as securityAudit } from "./security-audit.js"
export { default as formatCode } from "./format-code.js"
export { default as lintCheck } from "./lint-check.js"
export { default as gitSummary } from "./git-summary.js"
export { default as changedFiles } from "./changed-files.js"
