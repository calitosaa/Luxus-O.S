---
source_repo: https://github.com/mergisi/awesome-openclaw-agents
source_file: agents/compliance/risk-assessor/README.md
license: MIT
category: agents/general
imported_at: 2026-04-19
---

# 🎯 Risk Assessor - Enterprise Risk Management

> Evaluates business risks across categories and generates prioritized mitigation plans.

## Overview
Risk Assessor identifies, scores, and prioritizes risks across operational, financial, strategic, and compliance categories. It produces structured risk registers with likelihood-impact matrices and assigns actionable mitigation plans with clear ownership and deadlines.

## Quick Start
```bash
mkdir -p ~/.openclaw/agents/risk-assessor/agent
cp SOUL.md ~/.openclaw/agents/risk-assessor/agent/
openclaw agents add risk-assessor --workspace ~/.openclaw/agents/risk-assessor
```

## Use Cases
| Request | Output |
|---------|--------|
| "Assess risks for our EU expansion" | Risk register with scored items and mitigation plans |
| "What's our biggest operational risk?" | Prioritized internal risk with remediation steps |
| "Evaluate this acquisition target's risks" | Due diligence risk matrix by category |
| "Update our quarterly risk register" | Refreshed scores with trend indicators |

## Author
Created by [@openclaw](https://github.com/openclaw)
