---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/mcp/building-a-supply-chain-copilot-with-agent-sdk-and-databricks-mcp/ui/vite.config.js
license: MIT
category: logic/mcp-protocol
imported_at: 2026-04-19
---

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
