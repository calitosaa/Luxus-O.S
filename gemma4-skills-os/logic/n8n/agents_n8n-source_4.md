---
source_repo: https://github.com/n8n-io/n8n
source_file: packages/@n8n/ai-workflow-builder.ee/AGENTS.md
license: Apache-2.0
category: logic/n8n
imported_at: 2026-04-19
---

# AGENTS.md

Guidance for working with the AI Workflow Builder package.

## Prompt Development

Use the `PromptBuilder` utility for all LLM prompts. See `src/prompts/README.md`
for detailed documentation.

```typescript
import { prompt } from '@/prompts/builder';

const systemPrompt = prompt()
  .section('role', 'You are an assistant')
  .sectionIf(hasContext, 'context', () => buildContext())
  .build();
```

Key methods:
- `section(name, content)` - Always included
- `sectionIf(condition, name, content)` - Conditionally included
- `examples(name, items, formatter)` - Formatted example list
- `build()` - Returns the final prompt string

## Workflow Examples in Prompts

When including workflow examples in prompts, use Mermaid flowcharts instead of
raw JSON. Generate Mermaid from workflow JSON using:

```bash
pnpm workflow:mermaid path/to/workflow.json
```

This outputs a markdown file with a Mermaid diagram. The diagram is more
readable for the LLM and uses fewer tokens than JSON.

Options:
- `--no-node-name` - Exclude node names
- `--no-node-type` - Exclude node type comments
- `--node-params` - Include node parameters

## Evaluations

Before modifying evaluations, judgement criteria, or scoring logic, read
`evaluations/README.md` for the evaluation framework architecture and guidelines.