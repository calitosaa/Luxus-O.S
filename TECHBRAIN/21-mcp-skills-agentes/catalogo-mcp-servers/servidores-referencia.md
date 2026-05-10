---
domain: "21-mcp-skills-agentes"
topic: "MCP Reference Servers"
subtopic: "Servidores de referencia oficiales"
difficulty: "intermediate"
tags: [mcp, servers, reference, anthropic]
related:
  - path: "../mcp-protocol/spec-completa.md"
    why: "Spec del protocolo que estos servers implementan"
  - path: "./por-categoria/desarrollo.md"
    why: "Servidores MCP de la categoría desarrollo"
sources:
  - url: "https://github.com/modelcontextprotocol/servers"
    title: "modelcontextprotocol/servers — Reference Servers"
    type: "sourcecode"
  - url: "https://github.com/wong2/awesome-mcp-servers"
    title: "wong2/awesome-mcp-servers — community catalog"
    type: "docs"
  - url: "https://mcpservers.org"
    title: "mcpservers.org — directorio oficial"
    type: "docs"
last_verified: "2026-05"
needs_sources: false
---

# MCP Reference Servers

> **Resumen**: Los reference servers son las implementaciones oficiales de MCP mantenidas en `modelcontextprotocol/servers`. Sirven como ejemplo canónico de cómo implementar primitivos MCP y como herramientas usables en producción.

## Catálogo de servidores de referencia

Todos los servidores listados están en el monorepo [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers).

| Servidor | Path en repo | Primitivos | Función |
|----------|--------------|------------|---------|
| **Everything** | `src/everything` | Tools + Resources + Prompts | Servidor de prueba que ejercita todas las primitivas — útil para testing de clients |
| **Fetch** | `src/fetch` | Tools | Descarga contenido web y lo convierte a markdown para consumo eficiente del LLM |
| **Filesystem** | `src/filesystem` | Tools + Resources | Operaciones de archivo con controles de acceso configurables |
| **Git** | `src/git` | Tools | Lectura, búsqueda y manipulación de repositorios Git |
| **Memory** | `src/memory` | Tools + Resources | Sistema de memoria persistente basado en grafo de conocimiento |
| **Sequential Thinking** | `src/sequentialthinking` | Tools | Resolución de problemas mediante secuencias reflexivas de pensamiento |
| **Time** | `src/time` | Tools | Conversiones de tiempo y zonas horarias |

## Selección de MCP servers oficiales (mantenidos por la propia compañía)

Los siguientes servers son mantenidos por la organización del producto al que conectan, no por terceros. Lista compilada de [wong2/awesome-mcp-servers](https://github.com/wong2/awesome-mcp-servers).

### Cloud y plataformas

| Servidor | Repo | Función |
|----------|------|---------|
| AWS Bedrock KB Retrieval | `awslabs/mcp/tree/main/src/bedrock-kb-retrieval-mcp-server` | Consulta Bedrock Knowledge Bases en lenguaje natural |
| AWS CDK | `awslabs/mcp/tree/main/src/cdk-mcp-server` | Asistente CDK con CDK Nag rules y AWS Solutions Constructs |
| AWS Documentation | `awslabs/mcp/tree/main/src/aws-documentation-mcp-server` | Búsqueda y conversión de docs AWS |
| Cloudflare | `cloudflare/mcp-server-cloudflare` | Workers, KV, R2, D1 y configuración de recursos Cloudflare |
| Azure DevOps | `microsoft/azure-devops-mcp` | Integración con Azure DevOps |

### Bases de datos

| Servidor | Repo | Función |
|----------|------|---------|
| ClickHouse | `ClickHouse/mcp-clickhouse` | Consultas a ClickHouse |
| Aiven | `Aiven-Open/mcp-aiven` | PostgreSQL, Kafka, ClickHouse y OpenSearch en Aiven |
| Chroma | `chroma-core/chroma-mcp` | Embeddings, vector search, document storage, full-text search |

### Desarrollo y CI/CD

| Servidor | Repo | Función |
|----------|------|---------|
| dbt | `dbt-labs/dbt-mcp` | Project metadata, model info, semantic layer querying |
| CircleCI | `CircleCI-Public/mcp-server-circleci` | Permite a agentes corregir failures de CircleCI |
| E2B | `e2b-dev/mcp-server` | Ejecución de código en sandboxes seguros |
| Browserbase | `browserbase/mcp-server-browserbase` | Automatización de browser en la nube |
| Bright Data | `brightdata/brightdata-mcp` | Discover, extract, interact con la web |

### IA, contenido y multimedia

| Servidor | Repo | Función |
|----------|------|---------|
| ElevenLabs | `elevenlabs/elevenlabs-mcp` | TTS y voice generation oficial |
| 21st.dev Magic | `21st-dev/magic-mcp` | Crear componentes UI |
| Apify | `apify/actors-mcp-server` | 3,000+ tools cloud para scraping web, e-commerce, social media, mapas |

### Búsqueda y datos

| Servidor | Repo | Función |
|----------|------|---------|
| Exa | `exa-labs/exa-mcp-server` | Search engine diseñado para agentes |
| Context 7 | `upstash/context7-mcp` | Up-to-date docs para Cursor prompts |
| AgentQL | `tinyfish-io/agentql-mcp` | Datos estructurados desde web no estructurada |
| CoinGecko | `docs.coingecko.com/reference/mcp-server/` | Crypto pricing 200+ blockchains, 8M+ tokens |
| Fibery | `Fibery-inc/fibery-mcp-server` | Queries y entity ops en Fibery |

### Otros

| Servidor | Repo | Función |
|----------|------|---------|
| 1mcpserver | `particlefuture/1mcpserver` | "MCP de MCPs" — descubrimiento y configuración automática de MCP servers en local. Disponible remoto en `mcp.1mcpserver.com/mcp/` |
| AgentRPC | `agentrpc/agentrpc` | Conecta funciones de cualquier lenguaje cruzando fronteras de red |

## Cómo añadir un MCP server a Claude Code

```bash
# Local (stdio)
claude mcp add filesystem npx @modelcontextprotocol/server-filesystem /path/to/dir

# Remoto (HTTP+SSE / streamable HTTP)
claude mcp add --transport http my-server http://localhost:8000/mcp
```

## Patrones de implementación observados

Mirando el código de los reference servers, hay patrones recurrentes:

**1. Validación de inputs en el límite del server**
Cada server valida `inputSchema` ANTES de invocar la lógica real. La spec dice que el client puede confiar, pero un server bien hecho re-valida — defense in depth.

**2. Errores diferenciados**
- Errores de protocolo (JSON-RPC error codes) → cuando la request es malformada
- Errores de tool (`isError: true`) → cuando la tool ejecutó pero falló su lógica
- Esto permite al LLM distinguir "no entendí cómo llamarte" de "intenté pero el archivo no existía"

**3. Resources versus Tools para datos**
- Si el dato es leído por el host antes de cada turn → Resource
- Si el dato es buscado por el LLM bajo demanda → Tool
- El filesystem server expone ambos: `list_directory` (tool) y `file://...` (resource template)

## Conexión con otros temas

| Tema | Relación |
|------|----------|
| [[../mcp-protocol/spec-completa.md]] | El protocolo que estos servers implementan |
| [[./por-categoria/desarrollo.md]] | Catálogo agrupado por categoría |
| [[../skills-system/skill-vs-mcp.md]] | Cuándo elegir MCP server vs Skill |

## Fuentes primarias

- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — repo oficial monorepo
- [wong2/awesome-mcp-servers](https://github.com/wong2/awesome-mcp-servers) — community catalog (sin PRs, submissions vía mcpservers.org)
- [mcpservers.org](https://mcpservers.org) — directorio web oficial
