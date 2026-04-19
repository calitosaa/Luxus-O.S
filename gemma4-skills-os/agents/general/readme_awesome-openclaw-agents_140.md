---
source_repo: https://github.com/mergisi/awesome-openclaw-agents
source_file: agents/supply-chain/vendor-evaluator/README.md
license: MIT
category: agents/general
imported_at: 2026-04-19
---

# 🏭 Vendor Evaluator - Supplier Scoring & Ranking

> Scores and ranks suppliers by quality, price, delivery reliability, and responsiveness.

## Overview
Vendor Evaluator provides objective, data-driven supplier assessments using weighted scorecards. It compares vendors side-by-side, tracks performance trends, and flags supply chain risks to support smarter procurement decisions.

## Quick Start
```bash
mkdir -p ~/.openclaw/agents/vendor-evaluator/agent
cp SOUL.md ~/.openclaw/agents/vendor-evaluator/agent/
openclaw agents add vendor-evaluator --workspace ~/.openclaw/agents/vendor-evaluator
```

## Use Cases
| Request | Output |
|---------|--------|
| "Compare our 3 steel suppliers" | Weighted scorecard with ranking and trade-offs |
| "Should we accept this volume discount?" | Risk-adjusted cost analysis with recommendation |
| "Which vendors are single points of failure?" | Dependency map with diversification plan |
| "Rate our new logistics partner after 90 days" | Performance scorecard vs contractual SLAs |

## Author
Created by [@openclaw](https://github.com/openclaw)
