---
source_repo: https://github.com/modelcontextprotocol/servers
source_file: src/time/src/mcp_server_time/__init__.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

from .server import serve


def main():
    """MCP Time Server - Time and timezone conversion functionality for MCP"""
    import argparse
    import asyncio

    parser = argparse.ArgumentParser(
        description="give a model the ability to handle time queries and timezone conversions"
    )
    parser.add_argument("--local-timezone", type=str, help="Override local timezone")

    args = parser.parse_args()
    asyncio.run(serve(args.local_timezone))


if __name__ == "__main__":
    main()
