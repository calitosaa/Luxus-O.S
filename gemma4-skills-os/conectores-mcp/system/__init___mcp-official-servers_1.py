---
source_repo: https://github.com/modelcontextprotocol/servers
source_file: src/git/src/mcp_server_git/__init__.py
license: MIT
category: conectores-mcp/system
imported_at: 2026-04-19
---

import click
from pathlib import Path
import logging
import sys
from .server import serve

@click.command()
@click.option("--repository", "-r", type=Path, help="Git repository path")
@click.option("-v", "--verbose", count=True)
def main(repository: Path | None, verbose: bool) -> None:
    """MCP Git Server - Git functionality for MCP"""
    import asyncio

    logging_level = logging.WARN
    if verbose == 1:
        logging_level = logging.INFO
    elif verbose >= 2:
        logging_level = logging.DEBUG

    logging.basicConfig(level=logging_level, stream=sys.stderr)
    asyncio.run(serve(repository))

if __name__ == "__main__":
    main()
