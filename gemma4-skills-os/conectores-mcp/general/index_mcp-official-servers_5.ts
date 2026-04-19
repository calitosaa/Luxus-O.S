---
source_repo: https://github.com/modelcontextprotocol/servers
source_file: src/everything/prompts/index.ts
license: MIT
category: conectores-mcp/general
imported_at: 2026-04-19
---

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerSimplePrompt } from "./simple.js";
import { registerArgumentsPrompt } from "./args.js";
import { registerPromptWithCompletions } from "./completions.js";
import { registerEmbeddedResourcePrompt } from "./resource.js";

/**
 * Register the prompts with the MCP server.
 *
 * @param server
 */
export const registerPrompts = (server: McpServer) => {
  registerSimplePrompt(server);
  registerArgumentsPrompt(server);
  registerPromptWithCompletions(server);
  registerEmbeddedResourcePrompt(server);
};
