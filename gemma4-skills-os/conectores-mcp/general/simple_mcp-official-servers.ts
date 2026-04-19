---
source_repo: https://github.com/modelcontextprotocol/servers
source_file: src/everything/prompts/simple.ts
license: MIT
category: conectores-mcp/general
imported_at: 2026-04-19
---

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

/**
 * Register a simple prompt with no arguments
 * - Returns the fixed text of the prompt with no modifications
 *
 * @param server
 */
export const registerSimplePrompt = (server: McpServer) => {
  // Register the prompt
  server.registerPrompt(
    "simple-prompt",
    {
      title: "Simple Prompt",
      description: "A prompt with no arguments",
    },
    () => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: "This is a simple prompt without arguments.",
          },
        },
      ],
    })
  );
};
