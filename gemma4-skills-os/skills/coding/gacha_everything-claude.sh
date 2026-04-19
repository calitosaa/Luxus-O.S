---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: skills/openclaw-persona-forge/gacha.sh
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

#!/bin/bash
# 龙虾灵魂抽卡机 - 薄壳脚本
# 实际逻辑在 gacha.py 中（Python secrets 模块保证真随机）
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
exec python3 "${SCRIPT_DIR}/gacha.py" "$@"
