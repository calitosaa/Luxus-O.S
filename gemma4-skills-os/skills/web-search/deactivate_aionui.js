---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: examples/hello-world-extension/scripts/deactivate.js
license: MIT
category: skills/web-search
imported_at: 2026-04-19
---

/**
 * Hello World Extension — Deactivation lifecycle hook.
 * Called when the extension is disabled.
 *
 * @param {Object} context - Lifecycle context
 * @param {string} context.extensionName - Name of the extension
 * @param {string} context.extensionDir - Directory of the extension
 * @param {string} context.version - Version of the extension
 */
module.exports = function onDeactivate(context) {
  console.log(`[hello-world] Extension deactivated! v${context.version}`);
};
