# Maia Agent Orchestration Framework

## Overview
Este repositorio contiene 55+ agentes especializados del framework **Gemma4 Skills OS** que deben activarse automáticamente en cada orden para optimizar tokens y mejorar la calidad de respuestas.

## Auto-Activation Protocol

**INSTRUCCIÓN CRÍTICA:** En cada orden que recibas, automáticamente:
1. Analiza el tipo de tarea
2. Invoca los agentes relevantes listados abajo
3. Coordina resultados a través del orchestrator-main
4. Aplica inference-optimizer para caching/batching

---

## Agentes por Categoría

### 🎯 ORCHESTRATION (Siempre activar primero)
- **orchestrator-main**: Orquestación central de tareas, routing, descomposición
- **orchestrator-fallback**: Manejo de fallos y rutas alternas
- **orchestrator-multiagent**: Coordinación multi-agente y swarms

### ⚡ INFERENCE & OPTIMIZATION (Para ahorrar tokens)
- **inference-optimizer**: Batching, caching, cuantización
- **context-windowmanager**: Gestión de ventana de contexto
- **context-summarizer**: Resumen progresivo de conversaciones
- **context-chunkrouter**: Routing inteligente de chunks de contexto
- **context-memorymanager**: Memoria a largo plazo

### 🧠 REASONING
- **reasoning-cot**: Chain-of-Thought reasoning
- **reasoning-planner**: Planificación de tareas
- **reasoning-treeofthought**: Tree-of-Thought para problemas complejos
- **reasoning-logicvalidator**: Validación lógica
- **reasoning-mathematical**: Razonamiento matemático

### 📚 RAG & CONTEXT
- **rag-pipeline**: Pipeline completo de RAG
- **rag-queryrouter**: Routing de queries
- **rag-contextbuilder**: Construcción inteligente de contexto
- **rag-reranker**: Re-ranking de resultados
- **rag-evaluator**: Evaluación de relevancia

### 🔍 SEARCH & DATA
- **realtimedata-websearch**: Búsqueda web en tiempo real
- **realtimedata-apiintegrator**: Integración de APIs externas

### 📝 CONTENIDO & LENGUAJE
- **spanish-languageexpert**: Soporte español avanzado
- **spanish-translator**: Traducción
- **spanish-codeswitcher**: Code-switching automático
- **creativewriting-author**: Escritura creativa
- **creativewriting-editor**: Edición y revisión
- **domain-technical-writer**: Documentación técnica

### 🔐 SEGURIDAD & QUALITY
- **safety-contentfilter**: Filtrado de contenido
- **safety-jailbreakdetector**: Detección de jailbreaks
- **safety-refusalcalibrator**: Calibración de rechazos
- **factcheck-claimverifier**: Verificación de claims
- **factcheck-confidencescorer**: Scoring de confianza
- **factcheck-selfcorrector**: Auto-corrección

### 💻 CODE & EXECUTION
- **codeexecution-sandbox**: Ejecución segura de código
- **codeexecution-validator**: Validación de código
- **structuredoutput-code**: Generación de código estructurado
- **structuredoutput-json**: Salida JSON
- **structuredoutput-table**: Salida en tablas

### 👁️ VISION & ANALYSIS
- **vision-imageanalyzer**: Análisis de imágenes
- **vision-chartreader**: Lectura de gráficos
- **vision-ocr**: OCR avanzado
- **vision-diagraminterpreter**: Interpretación de diagramas
- **vision-documentparser**: Parsing de documentos

### 🎨 DESIGN & SPECIALIZED
- **design**: Diseño y UX
- **domain-financial**: Análisis financiero
- **domain-legal**: Análisis legal
- **domain-medical**: Conocimiento médico
- **domain-scientific**: Asistencia científica

### 🔌 UTILITIES
- **automation**: Automatización de tareas
- **pc-control**: Control de PC/computadora
- **general**: Utilidades generales
- **research**: Asistencia en investigación

---

## Activation Rules por Tipo de Tarea

### Para CODING/DESARROLLO
Activa: orchestrator-main, inference-optimizer, reasoning-cot, codeexecution-sandbox, codeexecution-validator, factcheck-selfcorrector, structuredoutput-code, rag-pipeline

### Para RESEARCH/ANÁLISIS
Activa: rag-pipeline, rag-evaluator, factcheck-claimverifier, reasoning-treeofthought, domain-scientific, realtimedata-websearch, context-summarizer

### Para ESCRITURA
Activa: creativewriting-author, creativewriting-editor, domain-technical-writer, spanish-languageexpert, reasoning-planner, context-summarizer

### Para SEGURIDAD/AUDITORÍA
Activa: safety-contentfilter, safety-jailbreakdetector, factcheck-claimverifier, codeexecution-validator, domain-legal

### Para DATOS/ANÁLISIS
Activa: vision-imageanalyzer, vision-chartreader, structuredoutput-json, structuredoutput-table, reasoning-mathematical, domain-financial

### Para CUALQUIER TAREA (DEFAULT)
Siempre activa: orchestrator-main, inference-optimizer, reasoning-cot, context-windowmanager

---

## Token Optimization Strategy

1. **inference-optimizer** - Activa batching/caching automático
2. **context-windowmanager** - Aloca tokens eficientemente
3. **context-summarizer** - Comprime conversaciones largas
4. **reasoning-cot** - Reasoning con menos tokens via COT

---

## Ruflo Configuration

Los agentes están optimizados para la configuración **Ruflo** con:
- Swarm coordination (orchestrator multiagent)
- Performance monitoring (swarm-monitor)
- Dynamic topology (topology-manager)
- Direct execution (direct-executor)

---

## Implementation

Claude debe:
- ✅ Usar automáticamente Agent() tool con agentes relevantes
- ✅ Coordinar outputs a través de orchestrator-main
- ✅ Aplicar inference-optimizer en cada respuesta
- ✅ Mencionarlo si usa múltiples agentes en paralelo
- ✅ Ahorrar tokens mediante context-windowmanager
