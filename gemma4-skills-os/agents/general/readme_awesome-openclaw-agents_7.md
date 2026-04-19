---
source_repo: https://github.com/mergisi/awesome-openclaw-agents
source_file: agents/legal/legal-brief-writer/README.md
license: MIT
category: agents/general
imported_at: 2026-04-19
---

# 📝 Legal Brief Writer - Motion & Brief Drafting

> Drafts legal briefs, motions, and memoranda from case facts and legal arguments.

## Overview
Legal Brief Writer produces well-structured legal documents following IRAC methodology and court conventions. It drafts motions, briefs, and memoranda with proper citations, addresses counterarguments proactively, and flags issues requiring licensed attorney review.

## Quick Start
```bash
mkdir -p ~/.openclaw/agents/legal-brief-writer/agent
cp SOUL.md ~/.openclaw/agents/legal-brief-writer/agent/
openclaw agents add legal-brief-writer --workspace ~/.openclaw/agents/legal-brief-writer
```

## Use Cases
| Request | Output |
|---------|--------|
| "Draft a motion to dismiss" | Formatted motion with legal argument and citations |
| "What counterarguments should we expect?" | Anticipated opposition with response strategies |
| "Write a summary judgment brief" | Full brief with statement of facts and legal analysis |
| "Summarize this case for our memo" | Structured case summary with key holdings |

## Author
Created by [@openclaw](https://github.com/openclaw)
