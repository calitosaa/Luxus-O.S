---
domain: "21-mcp-skills-agentes"
topic: "Agent2Agent (A2A) Protocol"
subtopic: "Especificación y arquitectura"
difficulty: "advanced"
tags: [a2a, agents, protocol, multi-agent, json-rpc, sse]
related:
  - path: "../mcp-protocol/spec-completa.md"
    why: "MCP es complementario a A2A: MCP conecta LLM con tools, A2A conecta agente con agente"
  - path: "../../20-ia/agentes/multi-agente.md"
    why: "Patrones multi-agente que A2A facilita"
sources:
  - url: "https://a2a-protocol.org"
    title: "A2A Protocol — sitio oficial"
    type: "spec"
  - url: "https://a2a-protocol.org/latest/specification/"
    title: "A2A Protocol Specification"
    type: "spec"
  - url: "https://github.com/a2aproject/A2A"
    title: "a2aproject/A2A — repo oficial (antes google/A2A)"
    type: "sourcecode"
  - url: "https://github.com/a2aproject/a2a-python"
    title: "Python SDK"
    type: "sourcecode"
  - url: "https://github.com/a2aproject/a2a-samples"
    title: "Samples y ejemplos"
    type: "sourcecode"
last_verified: "2026-05"
needs_sources: false
---

# Agent2Agent (A2A) Protocol

> **Resumen**: A2A es un protocolo abierto para comunicación e interoperabilidad entre aplicaciones agentic opacas. Donde MCP estandariza la conexión LLM ↔ tools/data, A2A estandariza agente ↔ agente — preservando opacidad (los agentes colaboran sin compartir memoria interna, lógica propietaria o implementaciones de tools).

## Fundamento conceptual

A2A nace de un problema: agentes construidos en frameworks diferentes (LangGraph, AutoGen, CrewAI, custom) por compañías distintas, ejecutándose en servidores separados, no pueden colaborar **como agentes** — solo pueden ser invocados como tools.

A2A introduce primitivas que permiten:
1. **Discovery**: agentes encontrarse mutuamente (Agent Cards)
2. **Negociación**: acordar modalidades de interacción (text, forms, media)
3. **Colaboración segura**: tareas long-running con autenticación y observabilidad
4. **Opacidad**: cooperar sin exponer estado interno

A2A es proyecto open source bajo Linux Foundation, contribuido inicialmente por Google.

## Arquitectura

```
┌──────────────────┐         A2A Protocol         ┌──────────────────┐
│   Agent A        │   ◄─── JSON-RPC / SSE ───►   │   Agent B        │
│ (LangGraph)      │                              │  (CrewAI)        │
│                  │                              │                  │
│  Internal state  │                              │ Internal state   │
│  Memory          │                              │ Memory           │
│  Tools           │                              │ Tools            │
│  ─────────       │                              │ ─────────        │
│  Agent Card      │                              │ Agent Card       │
│  (public skills) │                              │ (public skills)  │
└──────────────────┘                              └──────────────────┘
        │                                                  │
        └─────────── publish via well-known URL ──────────┘
                    /.well-known/agent.json
```

## Características clave

### 1. Standardized Communication

JSON-RPC 2.0 sobre HTTP(S). Mismo transport base que MCP, lo que facilita gateways MCP↔A2A.

### 2. Agent Discovery — Agent Cards

Cada agente publica un "Agent Card" en una URL bien conocida:
```
https://my-agent.example.com/.well-known/agent.json
```

El Agent Card describe capabilities, skills disponibles y endpoints de conexión, sin revelar implementación interna.

### 3. Interacción flexible

A2A soporta tres modos:
- **Sincrónico**: request/response típico
- **Streaming**: vía Server-Sent Events (SSE) para respuestas progresivas
- **Asíncrono push**: notifications a posteriori (para tareas largas)

### 4. Rich Data Exchange

Maneja text, files y JSON estructurado nativamente — no solo strings.

### 5. Enterprise-Ready

Diseñado con:
- Autenticación (formalización en roadmap)
- Security primitives
- Observability hooks

## SDKs disponibles

| Lenguaje | Package | Repo |
|----------|---------|------|
| Python | `pip install a2a-sdk` | `a2aproject/a2a-python` |
| Go | `go get github.com/a2aproject/a2a-go` | `a2aproject/a2a-go` |
| JavaScript | `npm install @a2a-js/sdk` | `a2aproject/a2a-js` |
| Java | Maven artifact | `a2aproject/a2a-java` |
| .NET | `dotnet add package A2A` | `a2aproject/a2a-dotnet` |

## A2A vs MCP — relación complementaria

| Aspecto | MCP | A2A |
|---------|-----|-----|
| **Conecta** | LLM ↔ herramientas/datos externos | Agente ↔ agente |
| **Opacidad** | Server expone tools concretas | Agente expone skills, oculta implementación |
| **Discovery** | tools/list al inicializar | Agent Card en `/.well-known/agent.json` |
| **Long-running** | Limitado (request/response típico) | Diseño nativo para tareas largas con push notifications |
| **Multi-modal** | Content blocks (text, image) | Text, files, structured JSON nativo |
| **Foco principal** | Capability injection | Inter-agent collaboration |

Un agente A2A puede usar MCP servers internamente para sus tools y simultáneamente exponer skills A2A para colaboración con otros agentes.

## Roadmap del protocolo

Áreas de evolución activa según el repo oficial:

### Agent Discovery
- Formalizar authorization schemes
- Credenciales opcionales en Agent Card

### Agent Collaboration
- Método `QuerySkill()` para verificación dinámica de skills

### Task Lifecycle & UX
- Negociación dinámica de UX dentro de una task

### Client Methods & Transport
- Métodos client-initiated
- Mejora de fiabilidad en streaming

## Patrones de uso

**1. Specialist agents en pipeline**
Un agente "research" llama a un agente "writer" llama a un agente "reviewer". Cada uno es un servicio A2A independiente, mantenido por equipos distintos.

**2. Multi-vendor agent ecosystems**
Un agente Anthropic colabora con uno OpenAI con uno Google sin que ninguno revele su implementación interna.

**3. Long-running task delegation**
Un agente delega una tarea de horas/días a otro y recibe push notifications al completarse, en lugar de mantener conexión abierta.

## Gotchas

**1. Opacidad vs debugging**
La opacidad por diseño dificulta debugging cross-agent. Hay que invertir en observability transversal (traces, logs estructurados con correlation IDs).

**2. Versioning de Agent Cards**
Si el Agent Card cambia (skills añadidos/removidos), los agentes que lo cachearon pueden invocar skills inexistentes. Hay que versionar y respetar Cache-Control headers.

**3. Authentication aún en evolución**
La spec actual deja muchos detalles de auth a la implementación. Hay riesgo de fragmentación entre vendors hasta que el roadmap se concrete.

**4. No reemplaza MCP**
Confusión común: pensar que A2A sustituye a MCP. Son ortogonales — MCP para tools, A2A para agentes.

## Conexión con otros temas

| Tema | Relación |
|------|----------|
| [[../mcp-protocol/spec-completa.md]] | Protocolo complementario, mismo JSON-RPC base |
| [[../../20-ia/agentes/multi-agente.md]] | A2A es la implementación estándar para multi-agente |
| [[../../14-backend/auth/oauth2-oidc.md]] | OAuth para autenticación de agentes |

## Fuentes primarias

- [a2a-protocol.org](https://a2a-protocol.org) — sitio oficial
- [a2a-protocol.org/latest/specification/](https://a2a-protocol.org/latest/specification/) — spec más reciente
- [a2aproject/A2A](https://github.com/a2aproject/A2A) — repo oficial (movido desde google/A2A bajo Linux Foundation)
- [a2aproject/a2a-samples](https://github.com/a2aproject/a2a-samples) — ejemplos
- [DeepLearning.AI A2A course](https://goo.gle/dlai-a2a) — curso oficial gratuito (URL del repo)
