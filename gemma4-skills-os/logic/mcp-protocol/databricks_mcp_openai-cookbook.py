---
source_repo: https://github.com/openai/openai-cookbook
source_file: examples/mcp/building-a-supply-chain-copilot-with-agent-sdk-and-databricks-mcp/databricks_mcp.py
license: MIT
category: logic/mcp-protocol
imported_at: 2026-04-19
---

"""
Databricks OAuth client provider for MCP servers.
"""

class DatabricksOAuthClientProvider:
    def __init__(self, ws):
        self.ws = ws

    def get_token(self):
        # For Databricks SDK >=0.57.0, token is available as ws.config.token
        return self.ws.config.token
