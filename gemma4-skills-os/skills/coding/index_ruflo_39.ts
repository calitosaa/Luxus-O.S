---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/src/infrastructure/plugins/index.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

/**
 * Plugin Infrastructure Index
 */

export { PluginManager } from './PluginManager';
export type { PluginManagerOptions } from './PluginManager';
export { BasePlugin, type Plugin, type ExtensionPoint } from './Plugin';
export { ExtensionPointNames, type ExtensionPointName } from './ExtensionPoint';
