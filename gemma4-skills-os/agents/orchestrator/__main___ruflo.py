---
source_repo: https://github.com/ruvnet/ruflo
source_file: v2/benchmark/src/swarm_benchmark/__main__.py
license: MIT
category: agents/orchestrator
imported_at: 2026-04-19
---

"""Main entry point for the swarm benchmark CLI."""

import sys
from .cli.main import main

if __name__ == "__main__":
    sys.exit(main())