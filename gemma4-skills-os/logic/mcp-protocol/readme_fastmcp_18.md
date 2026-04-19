---
source_repo: https://github.com/PrefectHQ/fastmcp
source_file: examples/smart_home/README.md
license: Apache-2.0
category: logic/mcp-protocol
imported_at: 2026-04-19
---

# smart home mcp server

```bash
cd examples/smart_home
mcp install src/smart_home/hub.py:hub_mcp -f .env
```
where `.env` contains the following:
```
HUE_BRIDGE_IP=<your hue bridge ip>
HUE_BRIDGE_USERNAME=<your hue bridge username>
```

```bash
open -a Claude
```