---
source_repo: https://github.com/aaronsb/google-workspace-mcp
source_file: src/factory/registry.ts
license: MIT
category: conectores-mcp/google-workspace
imported_at: 2026-04-19
---

/**
 * Shared factory registry — single instance of manifest + generated tools.
 * Both handler.ts and tools.ts import from here instead of loading independently.
 *
 * This module uses import.meta.url (ESM only) to resolve manifest.yaml
 * relative to the built output, which works when running via npx or mcpb
 * where cwd is NOT the project root.
 */

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setModuleDir, loadManifest, generateTools } from './generator.js';
import { patches } from './patches.js';
import type { GeneratedTool } from './types.js';
import type { Manifest } from './types.js';

// Inject module directory so loadManifest can find manifest.yaml
// relative to the built output (build/factory/registry.js → build/factory/manifest.yaml)
setModuleDir(dirname(fileURLToPath(import.meta.url)));

export const manifest: Manifest = loadManifest();
export const generatedTools: GeneratedTool[] = generateTools(manifest, patches);
