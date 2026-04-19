---
source_repo: https://github.com/PrefectHQ/fastmcp
source_file: examples/auth/workos_oauth/README.md
license: Apache-2.0
category: logic/mcp-protocol
imported_at: 2026-04-19
---

# WorkOS OAuth Example

Demonstrates FastMCP server protection with WorkOS OAuth.

## Setup

1. Create a WorkOS application and copy your credentials:

   ```bash
   export WORKOS_CLIENT_ID="your-client-id"
   export WORKOS_CLIENT_SECRET="your-client-secret"
   export WORKOS_AUTHKIT_DOMAIN="https://your-app.authkit.app"
   ```

2. Run the server:

   ```bash
   python server.py
   ```

3. In another terminal, run the client:

   ```bash
   python client.py
   ```

The client will open your browser for WorkOS authentication.
