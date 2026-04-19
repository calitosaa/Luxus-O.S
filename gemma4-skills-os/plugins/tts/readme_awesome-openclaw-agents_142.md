---
source_repo: https://github.com/mergisi/awesome-openclaw-agents
source_file: agents/voice/voicemail-transcriber/README.md
license: MIT
category: plugins/tts
imported_at: 2026-04-19
---

# 🎙️ Voicemail Transcriber - Smart Voicemail Processing

> Transcribes voicemails, extracts action items, classifies urgency, and routes to the right team.

## Overview
Voicemail Transcriber converts voicemail messages into structured text summaries with extracted caller details, action items, and urgency classification. It routes critical messages immediately and ensures nothing falls through the cracks.

## Quick Start
```bash
mkdir -p ~/.openclaw/agents/voicemail-transcriber/agent
cp SOUL.md ~/.openclaw/agents/voicemail-transcriber/agent/
openclaw agents add voicemail-transcriber --workspace ~/.openclaw/agents/voicemail-transcriber
```

## Use Cases
| Request | Output |
|---------|--------|
| "Process overnight voicemails" | Prioritized summary with action items per message |
| "Forward the urgent one to engineering" | Formatted alert with caller details and transcript |
| "Any voicemails from Acme Corp this week?" | Filtered list with summaries and callback status |
| "Which voicemails still need callbacks?" | Open action item report by assignee |

## Author
Created by [@openclaw](https://github.com/openclaw)
