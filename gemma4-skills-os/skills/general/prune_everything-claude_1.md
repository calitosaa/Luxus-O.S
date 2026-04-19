---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/zh-CN/commands/prune.md
license: MIT
category: skills/general
imported_at: 2026-04-19
---

---
name: prune
description: 删除超过 30 天且从未被提升的待处理本能
command: true
---

# 清理待处理本能

删除那些由系统自动生成、但从未经过审查或提升的过期待处理本能。

## 实现

使用插件根目录路径运行本能 CLI：

```bash
python3 "${CLAUDE_PLUGIN_ROOT}/skills/continuous-learning-v2/scripts/instinct-cli.py" prune
```

或者如果 `CLAUDE_PLUGIN_ROOT` 未设置（手动安装）：

```bash
python3 ~/.claude/skills/continuous-learning-v2/scripts/instinct-cli.py prune
```

## 用法

```
/prune                    # 删除超过 30 天的本能
/prune --max-age 60       # 自定义年龄阈值（天）
/prune --dry-run          # 仅预览，不实际删除
```
