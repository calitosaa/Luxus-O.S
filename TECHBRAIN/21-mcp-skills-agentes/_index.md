# 21 — MCP, Skills y Agentes

> Model Context Protocol completo, sistemas de skills para agentes, A2A protocol, catálogos de MCP servers y skills.

## Mapa del dominio

```
21-mcp-skills-agentes/
├── mcp-protocol/
│   ├── spec-completa.md               # MCP spec 2025-03-26 completa
│   ├── primitivos/
│   │   ├── tools.md                   # Tool definitions, input schemas, annotations
│   │   ├── resources.md               # Resource URIs, templates, subscriptions
│   │   ├── prompts.md                 # Prompt templates y arguments
│   │   └── sampling.md                # Server-initiated LLM calls
│   ├── transportes/
│   │   ├── stdio.md                   # stdio transport protocol
│   │   ├── sse.md                     # Server-Sent Events transport
│   │   └── streamable-http.md         # HTTP+SSE bidireccional
│   ├── construir-mcp/
│   │   ├── python-fastmcp.md          # FastMCP library, decorators
│   │   ├── typescript-sdk.md          # Official TypeScript MCP SDK
│   │   ├── mcp-autenticacion.md       # OAuth 2.1 para MCP servers
│   │   └── mcp-testing.md             # MCP Inspector, unit testing
│   └── mcp-seguridad.md               # Tool poisoning, injection attacks
├── skills-system/
│   ├── skill-md-format.md             # Spec del formato .md de skills
│   ├── skill-design-patterns.md       # How to write effective skills
│   └── skill-vs-mcp.md                # Trade-offs: cuando usar cada uno
├── a2a-protocol/
│   └── a2a-spec.md                    # Google A2A spec completa
├── catalogo-skills/
│   ├── anthropic-skills.md            # Skills oficiales de Anthropic
│   ├── google-antigravity-skills.md   # Google Antigravity + Gemini CLI
│   ├── openai-codex-skills.md
│   ├── github-copilot-skills.md
│   ├── vercel-skills.md
│   ├── cloudflare-skills.md
│   ├── stripe-skills.md
│   └── community-top-skills.md        # Top skills de la comunidad
└── catalogo-mcp-servers/
    ├── servidores-referencia.md        # Official MCP reference servers
    ├── por-categoria/
    │   ├── productividad.md           # Notion, Linear, Gmail, Calendar
    │   ├── bases-datos.md             # PostgreSQL, Redis, Supabase, D1
    │   ├── desarrollo.md              # GitHub, GitLab, Sentry
    │   ├── ai-ml.md                   # LangSmith, W&B, HuggingFace
    │   ├── cloud.md                   # AWS, GCP, Azure, Cloudflare
    │   ├── comunicacion.md            # Slack, Discord, Twilio
    │   └── busqueda.md                # Brave, Exa, web scraping
    └── guias-implementacion/
        ├── mcp-en-claude-code.md
        └── mcp-en-cursor.md
```

## Topics pendientes

- [ ] MCP spec 2025-03-26 completa — fuente: [MCP Specification](https://spec.modelcontextprotocol.io/specification/2025-03-26/)
- [ ] A2A Protocol spec — fuente: [Google A2A](https://google.github.io/A2A/)
- [ ] Skill .md format spec — fuente: [VoltAgent awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)
- [ ] MCP stdio transport implementation — fuente: [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [ ] MCP Streamable HTTP transport — fuente: [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)
- [ ] FastMCP Python framework — fuente: [FastMCP GitHub](https://github.com/jlowin/fastmcp)
- [ ] MCP tool annotations (read-only, destructive) — fuente: [MCP spec](https://spec.modelcontextprotocol.io/specification/2025-03-26/)

## Prereqs recomendados

- IA Agentes → [[../20-ia/_index.md]]
- APIs Backend → [[../14-backend/_index.md]]

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 7 |

---

*Última actualización: 2026-05*
