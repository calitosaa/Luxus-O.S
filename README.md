# Luxus O.S  —  Maia (Gemma 4 E4B + 100k+ archivos)

> **Maia** = Gemma 4 E4B fine-tuneada sobre `gemma4-skills-os/` **+** biblioteca RAG con los mismos 100.000+ archivos.
> Parte kung-fu de Neo (en los pesos), parte "Google en la cabeza" (recuperación en tiempo real).

---

## El archivo que buscas

El entregable final es **`maia.gguf`** (~3-4 GB, Gemma 4 E4B cuantizado Q4_K_M).
Lo produce un notebook de un solo click en **Colab gratis (T4)** o **Kaggle (T4 x2, 30h/sem gratis)**.
Se descarga a tu Google Drive o directo al navegador.

> Si quieres probar Maia **hoy sin entrenar**, ejecuta `setup_maia.bat` (Windows) o `setup_maia.sh` (Linux/macOS) — descarga Gemma 4 E4B vía Ollama y crea el modelo `maia` con el prompt system de Luxus en 2 minutos.

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

### 2. Entrenar Maia en Colab o Kaggle (30-90 min, 1 click)
- **Colab gratis (T4)**: abre `Maia/Maia_Trainer.ipynb` → `Runtime → Run all`.
- **Kaggle (T4 x2, 30h/sem gratis)**: sube `Maia/Maia_Trainer_Kaggle.ipynb`, elige *Accelerator → GPU T4 x2*, `Run All`.

Ambos notebooks:
   - Clonan el repo y reconstruyen el dataset.
   - Cargan `unsloth/gemma-4-E4B-it-unsloth-bnb-4bit` con Unsloth en 4-bit.
   - Fine-tune LoRA (rank 16) sobre los 103k ejemplos.
   - Exportan y cuantizan → **`maia.gguf` (~3-4 GB)**.
   - Copian a Google Drive (`MyDrive/Maia/`) o al panel *Output* de Kaggle.

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

# (Opcional pero recomendado) servidor RAG persistente → 10x mas rapido por query
python3 scripts/rag_server.py &   # expone http://localhost:8765/search

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
| Fine-tune (Colab) | `Maia/Maia_Trainer.ipynb` | Unsloth + Gemma 4 E4B + LoRA 16, export GGUF |
| Fine-tune (Kaggle) | `Maia/Maia_Trainer_Kaggle.ipynb` | Mismo pipeline en Kaggle T4 x2 |
| Modelo final | `Maia/maia.gguf` | ~3-4 GB, cargable en Ollama |
| Config runtime | `Maia/Modelfile` | Prompt system Luxus + sampling |
| Ingesta RAG | `scripts/rag_ingest.py` | Embeddings + ChromaDB persistente |
| Consulta RAG | `scripts/rag_query.py` | CLI de búsqueda con filtros por categoría |
| Servidor RAG | `scripts/rag_server.py` | HTTP persistente (stdlib, sin deps extra) |
| Orquestador | `Maia/maia-brain.ts` | retrieve (HTTP→fallback CLI) → inyecta ctx → Ollama stream |
| CLI | `index.ts` | Entrada `npm run dev` |
| Setup 1-click | `setup_maia.bat` / `setup_maia.sh` | Instala Ollama + descarga modelo + crea `maia` |

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

- El modelo base es **Gemma 4 E4B** (Effective 4B params). Cabe en T4 gratis (Colab/Kaggle) y produce un GGUF de ~3-4 GB, corre suelto en CPU/GPU modesta.
- Para subir a la versión grande, cambia `MODEL_ID` en la celda 1 por `unsloth/gemma-4-E12B-it-unsloth-bnb-4bit` o `unsloth/gemma-3-27b-it` (requiere Colab Pro A100/L4).
- La carpeta `gemma4-skills-os/` es un vault de Obsidian perfectamente válido: abre la carpeta en Obsidian, instala **Dataview**, **Smart Connections** y **Copilot** y tienes un panel visual/chat sobre el conocimiento antes del fine-tune.
- Los artefactos pesados (`*.gguf`, `vectordb/`, JSONL grandes) están ignorados en git; están pensados para vivir fuera del repo.
