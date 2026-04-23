# Luxus O.S  —  Maia (Gemma E26B + 100k+ archivos)

> **Maia** = Gemma E26B fine-tuneada sobre `gemma4-skills-os/` **+** biblioteca RAG con los mismos 100.000+ archivos.
> Parte kung-fu de Neo (en los pesos), parte "Google en la cabeza" (recuperación en tiempo real).

---

## El archivo que buscas

El entregable final es **`maia.gguf`** (~17-18 GB, Gemma E26B cuantizado Q4_K_M).
**No se puede generar sin GPU**, así que lo produce un notebook de Colab de un solo click.
Se descarga a tu Google Drive o directo al navegador.

---

## Flujo en 3 pasos

### 1. Construir el dataset (local, 2 min)
```bash
python3 scripts/build_maia_dataset.py
```
Produce:
- `Maia/training_data.jsonl` — ~103k ejemplos para fine-tune.
- `Maia/rag_manifest.jsonl` — índice de los ~95k docs para RAG.
- `Maia/dataset_stats.json` — estadísticas.

### 2. Entrenar Maia en Colab (4-8 h, 1 click)
1. Abre `Maia/Maia_Trainer.ipynb` en **Google Colab** con GPU **A100** (ideal) o L4.
2. `Runtime → Run all`.
3. El notebook:
   - Clona el repo y reconstruye el dataset.
   - Carga `google/gemma-3-27b-it` con Unsloth en 4-bit.
   - Fine-tune LoRA (rank 32) sobre los 103k ejemplos.
   - Exporta y cuantiza → **`maia.gguf` (~17-18 GB)**.
   - Copia a tu Google Drive en `MyDrive/Maia/`.

Sale también `maia-lora.zip` (~200 MB) por si quieres re-iterar sin re-entrenar.

### 3. Arrancar Maia en local
Requiere [Ollama](https://ollama.com) instalado.

```bash
# Copia maia.gguf junto al Modelfile
cp ~/Downloads/maia.gguf Maia/maia.gguf

# Crea el modelo en Ollama
ollama create maia -f Maia/Modelfile

# Conecta la biblioteca RAG (los 100k archivos)
ollama pull nomic-embed-text
pip install -r scripts/requirements.txt
python3 scripts/rag_ingest.py     # ~30-60 min, una sola vez

# Habla con Maia
npm install
npm run dev -- "explica la skill sparc-debug"
npm run dev -- --category agents "como funciona auto-agent"
```

---

## Qué hay debajo

| Componente | Archivo | Función |
|---|---|---|
| Dataset builder | `scripts/build_maia_dataset.py` | Empaqueta los 100k archivos en JSONL |
| Fine-tune | `Maia/Maia_Trainer.ipynb` | Unsloth + Gemma 27B + LoRA 32, export GGUF |
| Modelo final | `Maia/maia.gguf` | 17-18 GB, cargable en Ollama |
| Config runtime | `Maia/Modelfile` | Prompt system Luxus + sampling |
| Ingesta RAG | `scripts/rag_ingest.py` | Embeddings + ChromaDB persistente |
| Consulta RAG | `scripts/rag_query.py` | CLI de búsqueda con filtros por categoría |
| Orquestador | `Maia/maia-brain.ts` | retrieve → inyecta contexto → Ollama stream |
| CLI | `index.ts` | Entrada `npm run dev` |

---

## Contenido absorbido (`gemma4-skills-os/`)

| Carpeta | Archivos | Rol |
|---|---|---|
| `training-prompts/` | 44.366 | Fine-tune directo (son Q/A ya formateados) |
| `skills/` | 40.335 | Fine-tune + RAG |
| `agents/` | 6.203 | Fine-tune + RAG |
| `workflows/` | 2.417 | RAG |
| `logic/` | 1.128 | RAG |
| `conectores-mcp/` | 1.073 | RAG (schemas MCP) |
| `mcp-providers/` | 250 | RAG |
| `plugins/` | 86 | RAG |

Tras dedup: **103.857 ejemplos de fine-tune**, **95.865 documentos RAG**.

---

## Notas

- El flujo funciona también con **Gemma E4B** (~3-4 GB) sin Colab Pro: cambia `MODEL_ID` en la celda 1 del notebook.
- La carpeta `gemma4-skills-os/` es un vault de Obsidian perfectamente válido: abre la carpeta en Obsidian, instala **Dataview**, **Smart Connections** y **Copilot** y tienes un panel visual/chat sobre el conocimiento antes del fine-tune.
- Los artefactos pesados (`*.gguf`, `vectordb/`, JSONL grandes) están ignorados en git; están pensados para vivir fuera del repo.
