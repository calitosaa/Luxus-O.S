---
source_repo: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
source_file: .claude/skills/design-system/scripts/slide-token-validator.py
license: MIT
category: skills/design
imported_at: 2026-04-19
---

#!/usr/bin/env python3
"""
Slide Token Validator (Legacy Wrapper)
Now delegates to html-token-validator.py for unified HTML validation.

For new usage, prefer:
  python html-token-validator.py --type slides
  python html-token-validator.py --type infographics
  python html-token-validator.py                       # All HTML assets
"""

import sys
import subprocess
from pathlib import Path

SCRIPT_DIR = Path(__file__).parent
UNIFIED_VALIDATOR = SCRIPT_DIR / 'html-token-validator.py'


def main():
    """Delegate to unified html-token-validator.py with --type slides."""
    args = sys.argv[1:]

    # If no files specified, default to slides type
    if not args or all(arg.startswith('-') for arg in args):
        cmd = [sys.executable, str(UNIFIED_VALIDATOR), '--type', 'slides'] + args
    else:
        cmd = [sys.executable, str(UNIFIED_VALIDATOR)] + args

    result = subprocess.run(cmd)
    sys.exit(result.returncode)


if __name__ == '__main__':
    main()
