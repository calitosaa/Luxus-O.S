# MAIA — Configuración de Agentes y Skills

Repositorio: `calitosaa/maia` | Branch de desarrollo: `claude/setup-skills-agents-rRKXg`

Todos los agentes y skills de `gemma4-skills-os/` están disponibles y deben usarse automáticamente según el tipo de tarea solicitada.

---

## REGLAS DE USO AUTOMÁTICO

Para **cada tarea** que el usuario solicite:
1. Identificar qué agentes y skills aplican según la tabla de abajo.
2. Activar el agente orquestador correspondiente como coordinador.
3. Usar los sub-agentes y skills especializados para ejecutar la tarea.
4. Responder en el idioma del usuario (español/inglés según contexto).

---

## ORQUESTADORES (usar siempre como punto de entrada)

| Agente | Ruta | Rol |
|--------|------|-----|
| `orchestrator-main` | `gemma4-skills-os/agents/orchestrator-main/` | Coordinador principal — routing, descomposición, agregación |
| `orchestrator-multiagent` | `gemma4-skills-os/agents/orchestrator-multiagent/` | Coordinación multi-agente — colaboración, consenso |
| `orchestrator-fallback` | `gemma4-skills-os/agents/orchestrator-fallback/` | Recuperación de errores — fallback, degradación elegante |

---

## AGENTES ESPECIALIZADOS — ACTIVACIÓN AUTOMÁTICA

### Razonamiento y Planificación
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `reasoning-planner` | `gemma4-skills-os/agents/reasoning-planner/` | Toda tarea compleja — descomponer objetivos en pasos |
| `reasoning-cot` | `gemma4-skills-os/agents/reasoning-cot/` | Problemas que requieren razonamiento paso a paso |
| `reasoning-treeofthought` | `gemma4-skills-os/agents/reasoning-treeofthought/` | Exploración de múltiples soluciones posibles |
| `reasoning-logicvalidator` | `gemma4-skills-os/agents/reasoning-logicvalidator/` | Validar argumentos lógicos, detectar inconsistencias |
| `reasoning-mathematical` | `gemma4-skills-os/agents/reasoning-mathematical/` | Problemas matemáticos, ecuaciones, cálculos |

### Código y Ejecución
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `codeexecution-sandbox` | `gemma4-skills-os/agents/codeexecution-sandbox/` | Ejecutar código Python/JS en sandbox seguro |
| `codeexecution-validator` | `gemma4-skills-os/agents/codeexecution-validator/` | Validar sintaxis, tests unitarios, escaneo de seguridad |
| `structuredoutput-code` | `gemma4-skills-os/agents/structuredoutput-code/` | Generar código con validación de sintaxis y formato |
| `structuredoutput-json` | `gemma4-skills-os/agents/structuredoutput-json/` | Generar y validar salidas JSON estructuradas |
| `structuredoutput-table` | `gemma4-skills-os/agents/structuredoutput-table/` | Formatear datos en tablas |

### Contexto y Memoria
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `context-memorymanager` | `gemma4-skills-os/agents/context-memorymanager/` | Gestionar memoria episódica y semántica |
| `context-summarizer` | `gemma4-skills-os/agents/context-summarizer/` | Resumir conversaciones largas |
| `context-chunkrouter` | `gemma4-skills-os/agents/context-chunkrouter/` | Priorizar y rutear chunks de contexto |
| `context-windowmanager` | `gemma4-skills-os/agents/context-windowmanager/` | Gestionar ventana de contexto y tokens |

### RAG (Retrieval-Augmented Generation)
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `rag-pipeline` | `gemma4-skills-os/agents/rag-pipeline/` | Pipeline completo RAG con embeddings y búsqueda vectorial |
| `rag-queryrouter` | `gemma4-skills-os/agents/rag-queryrouter/` | Clasificar y rutear queries a estrategia óptima |
| `rag-contextbuilder` | `gemma4-skills-os/agents/rag-contextbuilder/` | Ensamblar contexto desde chunks recuperados |
| `rag-reranker` | `gemma4-skills-os/agents/rag-reranker/` | Reordenar documentos por relevancia |
| `rag-evaluator` | `gemma4-skills-os/agents/rag-evaluator/` | Evaluar métricas de calidad RAG |

### Visión e Imágenes
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `vision-imageanalyzer` | `gemma4-skills-os/agents/vision-imageanalyzer/` | Analizar y describir contenido de imágenes |
| `vision-ocr` | `gemma4-skills-os/agents/vision-ocr/` | Extraer texto de imágenes/documentos |
| `vision-chartreader` | `gemma4-skills-os/agents/vision-chartreader/` | Interpretar gráficos y visualizaciones de datos |
| `vision-diagraminterpreter` | `gemma4-skills-os/agents/vision-diagraminterpreter/` | Interpretar diagramas técnicos y flowcharts |
| `vision-documentparser` | `gemma4-skills-os/agents/vision-documentparser/` | Parsear documentos estructurados desde imágenes |

### Verificación de Hechos
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `factcheck-claimverifier` | `gemma4-skills-os/agents/factcheck-claimverifier/` | Verificar afirmaciones factuales |
| `factcheck-confidencescorer` | `gemma4-skills-os/agents/factcheck-confidencescorer/` | Puntuar nivel de confianza en respuestas |
| `factcheck-selfcorrector` | `gemma4-skills-os/agents/factcheck-selfcorrector/` | Auto-corrección, detección de contradicciones |

### Datos en Tiempo Real
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `realtimedata-websearch` | `gemma4-skills-os/agents/realtimedata-websearch/` | Búsquedas web en tiempo real |
| `realtimedata-apiintegrator` | `gemma4-skills-os/agents/realtimedata-apiintegrator/` | Integrar datos de APIs externas |

### Seguridad
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `safety-contentfilter` | `gemma4-skills-os/agents/safety-contentfilter/` | Filtrar contenido dañino, tóxico o sesgado |
| `safety-jailbreakdetector` | `gemma4-skills-os/agents/safety-jailbreakdetector/` | Detectar intentos de jailbreak o inyección |
| `safety-refusalcalibrator` | `gemma4-skills-os/agents/safety-refusalcalibrator/` | Calibrar decisiones de rechazo con matiz |

### Escritura Creativa
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `creativewriting-author` | `gemma4-skills-os/agents/creativewriting-author/` | Escritura creativa, narrativas, desarrollo de personajes |
| `creativewriting-editor` | `gemma4-skills-os/agents/creativewriting-editor/` | Edición, gramática, estilo, tono |

### Dominio Especializado
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `domain-financial` | `gemma4-skills-os/agents/domain-financial/` | Análisis financiero, riesgo, portafolios |
| `domain-legal` | `gemma4-skills-os/agents/domain-legal/` | Análisis legal, contratos, compliance |
| `domain-medical` | `gemma4-skills-os/agents/domain-medical/` | Conocimiento médico, guías clínicas |
| `domain-scientific` | `gemma4-skills-os/agents/domain-scientific/` | Investigación científica, estadística |
| `domain-technical-writer` | `gemma4-skills-os/agents/domain-technical-writer/` | Documentación técnica, API docs, guías |

### Español / Bilingüe
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `spanish-languageexpert` | `gemma4-skills-os/agents/spanish-languageexpert/` | Procesamiento especializado de español |
| `spanish-codeswitcher` | `gemma4-skills-os/agents/spanish-codeswitcher/` | Respuestas bilingüe español-inglés |
| `spanish-translator` | `gemma4-skills-os/agents/spanish-translator/` | Traducción español-inglés de alta calidad |

### Automatización e Inferencia
| Agente | Ruta | Cuándo usar |
|--------|------|-------------|
| `automation` | `gemma4-skills-os/agents/automation/` | Automatización de tareas, workflows |
| `computeruse-browseragent` | `gemma4-skills-os/agents/computeruse-browseragent/` | Automatización de navegador web |
| `computeruse-terminalagent` | `gemma4-skills-os/agents/computeruse-terminalagent/` | Ejecución de comandos en terminal |
| `pc-control` | `gemma4-skills-os/agents/pc-control/` | Control de escritorio/PC |
| `inference-optimizer` | `gemma4-skills-os/agents/inference-optimizer/` | Optimización de rendimiento de inferencia |
| `inference-streamhandler` | `gemma4-skills-os/agents/inference-streamhandler/` | Manejo de streaming de tokens |
| `research` | `gemma4-skills-os/agents/research/` | Investigación profunda sobre cualquier tema |
| `design` | `gemma4-skills-os/agents/design/` | Diseño visual, UI/UX |

---

## SKILLS DISPONIBLES — ACTIVACIÓN AUTOMÁTICA

### Coding (`gemma4-skills-os/skills/coding/`)
- SQL migrations, vector tables, índices, funciones de atención/GNN/hiperbólicas
- Arquitectura de sistemas, TypeScript, Python
- **Usar en:** cualquier tarea de programación, bases de datos, algoritmos

### General (`gemma4-skills-os/skills/general/`)
- Fundamentos de negocio, introducción a skills, análisis de issues
- Memorias de contexto de sesiones anteriores
- **Usar en:** tareas generales, consultas de negocio, análisis

### Reasoning (`gemma4-skills-os/skills/reasoning/`)
- Integración avanzada, razonamiento complejo, cadenas de pensamiento
- **Usar en:** problemas complejos que requieren razonamiento profundo

### Memory (`gemma4-skills-os/skills/memory/`)
- Gestión de memoria a largo plazo
- **Usar en:** conversaciones largas, seguimiento de contexto

### Web-Search (`gemma4-skills-os/skills/web-search/`)
- Búsqueda web, scraping, integración de datos en tiempo real
- **Usar en:** cualquier tarea que requiera información actualizada

### Files (`gemma4-skills-os/skills/files/`)
- Manejo de archivos, sincronización
- **Usar en:** operaciones de archivos, migración de datos

### Design (`gemma4-skills-os/skills/design/`)
- Diseño visual, UI/UX, assets
- **Usar en:** tareas de diseño, frontend, interfaces

### Voice (`gemma4-skills-os/skills/voice/`)
- Procesamiento de voz, TTS/STT
- **Usar en:** tareas relacionadas con audio y voz

### Expansion (`gemma4-skills-os/skills/expansion/`)
- Skills de razonamiento avanzado generadas
- **Usar en:** tareas que requieren capacidades extendidas de razonamiento

---

## LOGIC Y WORKFLOWS

### Logic (`gemma4-skills-os/logic/`)
- `browser-use/` — Automatización de browser
- `mcp-protocol/` — Integración con MCP servers
- `n8n/` — Workflows n8n para automatización
- `openclaw/` — Herramientas especializadas
- `pc-reasoning/` — Razonamiento para control de PC

### Workflows (`gemma4-skills-os/workflows/`)
- `ai-pipelines/` — Pipelines de IA completos
- `calendar/` — Automatización de calendario
- `data/` — Procesamiento de datos
- `email/` — Automatización de email
- `general/` — Workflows generales
- `notifications/` — Sistema de notificaciones

---

## FLUJO DE DECISIÓN PARA CADA TAREA

```
TAREA RECIBIDA
     │
     ▼
reasoning-planner → Descomponer en pasos
     │
     ▼
orchestrator-main → Seleccionar agentes y skills
     │
     ├─ ¿Código? → codeexecution-sandbox + codeexecution-validator
     ├─ ¿Español? → spanish-codeswitcher + spanish-languageexpert
     ├─ ¿Datos? → rag-pipeline + structuredoutput-json/table
     ├─ ¿Búsqueda? → realtimedata-websearch
     ├─ ¿Imagen? → vision-imageanalyzer / vision-ocr
     ├─ ¿Razonamiento complejo? → reasoning-cot + reasoning-treeofthought
     ├─ ¿Escritura? → creativewriting-author + creativewriting-editor
     ├─ ¿Dominio específico? → domain-financial/legal/medical/scientific
     └─ ¿Error? → orchestrator-fallback
     │
     ▼
factcheck-selfcorrector → Verificar calidad
     │
     ▼
RESPUESTA AL USUARIO
```

---

## CONFIGURACIÓN DEL PROYECTO

- **Branch activo:** `claude/setup-skills-agents-rRKXg`
- **Repositorio GitHub:** `calitosaa/maia`
- **Directorio de skills y agentes:** `gemma4-skills-os/`
- **Idioma del usuario:** español (responder siempre en español salvo instrucción contraria)

---

## NOTAS OPERATIVAS

- Siempre hacer commit y push al branch `claude/setup-skills-agents-rRKXg` al completar cambios
- Crear PR como draft después de cada push
- Los agentes de seguridad (`safety-*`) están SIEMPRE activos en segundo plano
- El agente `spanish-codeswitcher` está SIEMPRE activo (usuario habla español)
- El agente `factcheck-selfcorrector` verifica TODAS las respuestas antes de entregarlas
