---
domain: "21-mcp-skills-agentes"
topic: "Model Context Protocol — Spec 2025-11-25"
subtopic: "Especificación completa"
difficulty: "advanced"
tags: [mcp, agents, protocol, llm, tools, resources, prompts, sampling]
related:
  - path: "./primitivos/tools.md"
    why: "Detalles de la primitiva Tools"
  - path: "./primitivos/resources.md"
    why: "Detalles de la primitiva Resources"
  - path: "./transportes/stdio.md"
    why: "Transport stdio"
  - path: "./transportes/streamable-http.md"
    why: "Transport HTTP+SSE"
  - path: "../a2a-protocol/a2a-spec.md"
    why: "Google A2A es el complemento multi-agente de MCP"
prereqs:
  - path: "../../20-ia/agentes/tool-use.md"
sources:
  - url: "https://modelcontextprotocol.io/specification/latest"
    title: "MCP Specification (latest)"
    type: "spec"
  - url: "https://github.com/modelcontextprotocol/specification/tree/main/schema/2025-11-25"
    title: "MCP Schema 2025-11-25 (TypeScript + JSON Schema)"
    type: "spec"
  - url: "https://github.com/modelcontextprotocol/typescript-sdk"
    title: "MCP TypeScript SDK — referencia de implementación"
    type: "sourcecode"
  - url: "https://github.com/modelcontextprotocol/python-sdk"
    title: "MCP Python SDK"
    type: "sourcecode"
  - url: "https://github.com/modelcontextprotocol/specification"
    title: "MCP Specification Repository"
    type: "spec"
last_verified: "2026-05"
needs_sources: false
---

# Model Context Protocol — Spec 2025-11-25

> **Resumen**: MCP es un protocolo abierto que estandariza cómo las aplicaciones host exponen contexto y capacidades a modelos de lenguaje. Es una capa de integración entre el LLM y el mundo externo: herramientas, datos, APIs y acciones.

## Fundamento conceptual

MCP (Model Context Protocol) define una arquitectura cliente-servidor donde:

- **Host**: La aplicación que contiene el LLM (ej. Claude Code, Claude Desktop, un agente custom)
- **Client**: Componente dentro del host que gestiona una o más conexiones MCP
- **Server**: Proceso externo que expone capabilities (tools, resources, prompts)
- **LLM**: El modelo que usa el host para generar respuestas

El flujo es: LLM ↔ Host/Client ↔ MCP Protocol ↔ Server ↔ Datos/APIs externas

```
┌─────────────────────────────────────────────────────────┐
│  HOST (Claude Code, Claude Desktop, custom agent)        │
│  ┌──────────────────┐   ┌───────────────────────────┐   │
│  │   LLM (Claude)   │   │     MCP Client            │   │
│  │                  │◄──│  - gestiona conexiones    │   │
│  │  tool_use block  │──►│  - rutas tool_call → srv  │   │
│  └──────────────────┘   └───────────┬───────────────┘   │
└────────────────────────────────────┼────────────────────┘
                                     │ MCP Protocol
               ┌─────────────────────┼──────────────────────┐
               │                     │                      │
         ┌─────▼────┐          ┌─────▼────┐          ┌─────▼────┐
         │ MCP Srv A │          │ MCP Srv B │          │ MCP Srv C │
         │  (GitHub) │          │ (Postgres)│          │ (Filesystem)│
         └──────────┘          └──────────┘          └──────────┘
```

## Primitivos del protocolo

MCP define cuatro primitivos, todos opcionales — cada server declara cuáles soporta:

### 1. Tools (controladas por el modelo)

Las tools son funciones que el LLM puede invocar. Son la primitiva más usada.

```json
{
  "name": "read_file",
  "description": "Read the complete contents of a file from the filesystem.",
  "inputSchema": {
    "type": "object",
    "properties": {
      "path": {
        "type": "string",
        "description": "Absolute path to the file to read"
      }
    },
    "required": ["path"]
  },
  "annotations": {
    "readOnlyHint": true,
    "destructiveHint": false,
    "idempotentHint": true,
    "openWorldHint": false
  }
}
```

**Annotations** (nuevo en 2025-03-26):
- `readOnlyHint`: la tool no modifica estado externo
- `destructiveHint`: puede eliminar datos (delete, drop, truncate)
- `idempotentHint`: invocar N veces = invocar 1 vez
- `openWorldHint`: la tool interactúa con sistemas externos no listados

El flujo de invocación de tool:
1. Server registra la tool vía `tools/list`
2. Client la incluye en el context del LLM
3. LLM genera `tool_use` block con `name` + `input` JSON
4. Client invoca `tools/call` en el server con `{name, arguments}`
5. Server ejecuta y devuelve `{content: [...], isError: bool}`
6. Client devuelve el resultado al LLM como `tool_result`

### 2. Resources (controladas por la aplicación)

Resources son datos que el host expone al LLM como contexto. No son invocadas por el modelo, sino incluidas en el contexto por el host.

```json
{
  "uri": "file:///project/src/main.py",
  "name": "main.py",
  "description": "Main application entry point",
  "mimeType": "text/x-python"
}
```

**URI schemes soportados**: `file://`, `https://`, URIs custom del server.

**Resource Templates** (para recursos dinámicos):
```json
{
  "uriTemplate": "github://{owner}/{repo}/blob/{branch}/{path}",
  "name": "GitHub File",
  "mimeType": "text/plain"
}
```

**Subscriptions**: El client puede suscribirse a cambios en un resource:
- `resources/subscribe` → notificaciones vía `notifications/resources/updated`

### 3. Prompts (controladas por el usuario)

Prompts son plantillas reutilizables que el servidor define y el usuario puede invocar (ej. un slash command en el host).

```json
{
  "name": "analyze_security",
  "description": "Analyze code for security vulnerabilities",
  "arguments": [
    {
      "name": "language",
      "description": "Programming language",
      "required": true
    }
  ]
}
```

La diferencia clave: Prompts son **user-controlled** (aparecen en la UI como comandos), Tools son **model-controlled** (el LLM decide invocarlas), Resources son **app-controlled** (el host decide qué incluir).

### 4. Sampling (controlado por el server)

Sampling permite que un MCP server pida al host que genere una respuesta LLM. Esto invierte el flujo normal.

```json
{
  "method": "sampling/createMessage",
  "params": {
    "messages": [...],
    "maxTokens": 1024,
    "systemPrompt": "You are a code reviewer...",
    "includeContext": "thisServer"
  }
}
```

**Caso de uso**: Un server de code review que quiere que el LLM analice un diff antes de decidir qué tools llamar.

## Transportes

### stdio

El mecanismo más simple. El host lanza el server como proceso hijo:
- Host escribe JSON-RPC al `stdin` del server
- Server responde en `stdout`
- `stderr` es para logs del server (el host puede ignorarlo o loggearlo)

```bash
# El host ejecuta algo como:
claude-code --mcp-server "npx @modelcontextprotocol/server-filesystem /path/to/dir"
```

**Protocolo de framing**: Cada mensaje JSON-RPC está en una línea (newline-delimited JSON).

### Server-Sent Events (SSE)

Para servers remotos accesibles vía HTTP:

```
Client → HTTP POST /message (JSON-RPC request)
Server → GET /sse (stream de eventos)
         data: {"jsonrpc":"2.0","method":"notifications/tools/list_changed"}
```

### Streamable HTTP (nuevo en 2025-03-26)

El transporte más reciente. Reemplaza al SSE unidireccional con un flujo bidireccional:

```
Client → POST /mcp (JSON-RPC)
Server → 200 OK con Content-Type: text/event-stream
         (puede enviar múltiples responses y notifications)
```

La ventaja sobre SSE puro: un solo endpoint HTTP, sin necesidad de mantener conexión SSE separada.

## Protocolo JSON-RPC 2.0

MCP usa JSON-RPC 2.0 sobre el transporte elegido.

### Inicialización

```json
// 1. Client → Server: initialize
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2025-11-25",
    "capabilities": {
      "roots": {"listChanged": true},
      "sampling": {}
    },
    "clientInfo": {
      "name": "claude-code",
      "version": "1.0.0"
    }
  }
}

// 2. Server → Client: initialized response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "protocolVersion": "2025-11-25",
    "capabilities": {
      "tools": {"listChanged": true},
      "resources": {"subscribe": true, "listChanged": true},
      "prompts": {"listChanged": true}
    },
    "serverInfo": {
      "name": "filesystem",
      "version": "1.0.0"
    }
  }
}

// 3. Client → Server: notifications/initialized
{
  "jsonrpc": "2.0",
  "method": "notifications/initialized"
}
```

### Lifecycle completo

```
initialize ──► initialized notification ──► [operational]
                                              │
                                   ┌──────────┼───────────┐
                                   │          │           │
                                tools/list  resources/list  prompts/list
                                tools/call  resources/read  prompts/get
                                   │          │           │
                              notifications/* (cambios en listas)
```

## Manejo de errores

MCP usa los error codes estándar de JSON-RPC 2.0 + códigos propios:

| Code | Significado |
|------|-------------|
| -32700 | Parse error |
| -32600 | Invalid request |
| -32601 | Method not found |
| -32602 | Invalid params |
| -32603 | Internal error |
| -32000 a -32099 | Server-defined errors |

Cuando una tool falla (error en ejecución, no en el protocolo), se retorna:
```json
{
  "content": [{"type": "text", "text": "Error: file not found"}],
  "isError": true
}
```
La distinción es importante: `isError: true` no es un error JSON-RPC (el protocolo funcionó), es un error de la tool.

## Implementación de referencia (Python FastMCP)

```python
# fuente: github.com/jlowin/fastmcp
from fastmcp import FastMCP
import asyncio

mcp = FastMCP("my-server")

@mcp.tool()
async def read_file(path: str) -> str:
    """Read the contents of a file."""
    with open(path) as f:
        return f.read()

@mcp.resource("config://app")
async def get_config() -> str:
    """Application configuration."""
    return '{"debug": false, "version": "1.0"}'

@mcp.prompt()
async def analyze_code(language: str) -> str:
    """Generate a code analysis prompt."""
    return f"Analyze this {language} code for bugs and performance issues:"

if __name__ == "__main__":
    mcp.run()  # por defecto usa stdio
```

## Implementación TypeScript

```typescript
// fuente: github.com/modelcontextprotocol/typescript-sdk
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  { name: "example-server", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "echo",
    description: "Echo back the input",
    inputSchema: {
      type: "object",
      properties: { text: { type: "string" } },
      required: ["text"]
    }
  }]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "echo") {
    return {
      content: [{ type: "text", text: request.params.arguments?.text }]
    };
  }
  throw new Error("Tool not found");
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

## Gotchas y edge cases

**1. Version negotiation falla silenciosamente**
Si client y server no coinciden en `protocolVersion`, el server puede responder con una versión diferente. El client debe verificar la versión recibida en `initialize`.

**2. Tools sin annotations = asume worst case**
Un host que implementa confirmaciones de usuario para tools destructivas no sabe si una tool sin annotations es destructiva. Por seguridad, trata las tools sin `readOnlyHint: true` como potencialmente destructivas.

**3. stdio vs remote: el timeout es diferente**
Para stdio, si el proceso hijo muere, el client lo detecta inmediatamente. Para HTTP/SSE, necesitas heartbeat o timeout explícito.

**4. Sampling requiere consent del usuario**
Un server que usa `sampling/createMessage` puede generar prompts arbitrarios para el LLM del host. Los hosts deben mostrar al usuario qué prompt se enviará antes de ejecutarlo (el spec lo requiere explícitamente).

**5. Resource subscriptions y thundering herd**
Si un server notifica `notifications/resources/list_changed` muy frecuentemente, el client hará `resources/list` repetidamente. Implementa rate limiting en el server.

## Conexión con otros temas

| Tema | Relación |
|------|----------|
| [[../a2a-protocol/a2a-spec.md]] | A2A extiende MCP para comunicación entre agentes |
| [[../../20-ia/agentes/tool-use.md]] | MCP es la implementación estándar de tool use para Claude |
| [[./primitivos/tools.md]] | Detalle completo de la primitiva Tools |
| [[./transportes/stdio.md]] | Implementación del transporte stdio |
| [[../../14-backend/auth/oauth2-oidc.md]] | OAuth 2.1 usado para autenticación en MCP servers remotos |

## Fuentes primarias

- [MCP Specification 2025-03-26](https://spec.modelcontextprotocol.io/specification/2025-03-26/) — la spec oficial completa
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) — implementación de referencia
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk) — SDK Python oficial
- [FastMCP](https://github.com/jlowin/fastmcp) — framework de alto nivel para Python
- [MCP Specification repo](https://github.com/modelcontextprotocol/specification) — fuente de la spec
