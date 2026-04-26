# Documentación Maia — Estado Completo del Proyecto

> Documento maestro para que cualquier IA o desarrollador retome el trabajo en cualquier punto.
> Última actualización: 2026-04-26

---

## 🎯 Objetivo del Proyecto

Crear **Maia**: un LLM personalizado basado en **Gemma 4 E4B** (Google) fine-tuneado con todo el framework **Gemma4-Skills-OS** del repo. El modelo final debe:

- Tener internamente todos los agentes (55+) sin necesidad de invocarlos externamente
- Tener cargados todos los skills, workflows y lógica del repo
- Ser asistente multimodal (texto + imagen + audio + video — heredado de Gemma 4)
- Soportar control de PC, automatización, asistente de voz
- Hablar español/inglés nativamente
- Ventana de contexto: 128K tokens (nativo de Gemma 4 E4B)

---

## 📁 Estructura del Repositorio

```
/home/user/Maia/
├── CLAUDE.md                       # Instrucciones para Claude (auto-activación de agentes)
├── DOCUMENTACION.md                # ESTE archivo
├── .gitignore                      # Excluye .claude/settings.local.json (token HF)
├── .claude/
│   └── settings.local.json         # HF_TOKEN (NO commiteado, gitignored)
│
├── gemma4-skills-os/               # Framework Gemma4-Skills-OS (Ruflo)
│   ├── agents/                     # 55 agentes (orchestrator, RAG, reasoning, vision, etc.)
│   ├── skills/                     # 9 categorías (coding, design, voice, web-search, etc.)
│   ├── workflows/                  # 4,834 workflows pre-entrenados
│   ├── logic/                      # Sistema de razonamiento
│   └── training-prompts/           # 44,374 prompts de sistema
│
└── finetuning/                     # PIPELINE COMPLETO DE FINE-TUNING
    ├── README_TRAINING.md          # Guía rápida
    ├── Modelfile                   # Para Ollama (system prompt + 128K ctx)
    ├── colab/
    │   └── maia_finetune_colab.ipynb   # ⭐ NOTEBOOK LISTO PARA COLAB FREE
    ├── scripts/
    │   ├── process_agents.py            # Extrae agentes → JSONL
    │   ├── process_skills.py            # Extrae skills → JSONL (todos los archivos)
    │   ├── process_workflows.py         # Extrae workflows → JSONL
    │   ├── process_logic.py             # Extrae logic → JSONL
    │   ├── process_training_prompts.py  # Extrae system prompts → JSONL
    │   ├── process_reasoning.py         # Genera reasoning patterns
    │   ├── build_final_dataset.py       # Combina todo en formato Gemma chat
    │   ├── finetune_maia.py             # Script HF puro (alternativo)
    │   ├── finetune_unsloth.py          # Script Unsloth (recomendado)
    │   ├── convert_to_gguf.py           # HF safetensors → GGUF Q4_K_M
    │   ├── train_runpod.sh              # Pipeline para servicios pago
    │   └── run_all.sh                   # Re-procesar dataset completo
    ├── output/
    │   ├── maia_gemma4_finetune.jsonl.part_00   # Dataset (split por GitHub limit)
    │   ├── maia_gemma4_finetune.jsonl.part_01
    │   ├── maia_gemma4_finetune.jsonl.part_02
    │   ├── REASSEMBLE.md                # Cómo reensamblar
    │   └── dataset_summary.json         # Stats del dataset
    ├── output_model/                    # Aquí irá Maia tras training
    │   └── MAIA_MODEL_INFO.md
    ├── agents_data/                     # Dataset por categoría
    ├── skills_data/
    ├── workflow_examples/
    ├── logic_examples/
    ├── instructions/
    └── reasoning_patterns/
```

---

## 📊 Estado Actual del Dataset

| Categoría | Archivos originales | Ejemplos generados | Status |
|-----------|---------------------|---------------------|--------|
| training-prompts | 44,374 | 88,080 (2x cada) | ✅ |
| skills | 44,724 | 39,176 | ✅ |
| workflows | 2,417 | 4,834 (2x cada) | ✅ |
| logic | 1,186 | 1,138 | ✅ |
| agents | 55 carpetas | 622 | ✅ |
| reasoning | (manual) | 14 | ✅ |
| **TOTAL** | **92,756** | **133,864** | **✅** |

- **Tamaño total:** 217 MB (split en 3 archivos de ~90MB por límite GitHub)
- **Formato:** Gemma chat template (`{"messages": [{"role": "user", ...}, {"role": "assistant", ...}]}`)
- **Idioma:** Mayoritariamente inglés con español nativo

---

## 🔧 Configuración Técnica

### Modelo Base
- **ID HuggingFace:** `google/gemma-4-E4B-it`
- **Variante Unsloth (recomendada):** `unsloth/gemma-4-E4B-it`
- **Parámetros:** 4B effective (E4B = "Effective 4B")
- **Arquitectura:** Dense + MoE híbrido
- **Modalidades:** Texto, imagen (variable aspect ratio), video, audio
- **Contexto nativo:** 128K tokens (131,072)
- **Idiomas:** 35+ out-of-the-box, 140+ pre-trained

### Hyperparámetros Fine-tuning
```python
BASE_MODEL = "unsloth/gemma-4-E4B-it"
METHOD = "QLoRA"  # 4-bit quantization + LoRA adapters
LORA_R = 16
LORA_ALPHA = 32
LORA_DROPOUT = 0.05
TARGET_MODULES = ["q_proj", "k_proj", "v_proj", "o_proj",
                  "gate_proj", "up_proj", "down_proj"]
MAX_SEQ_LEN_TRAINING = 8192      # durante training
MAX_SEQ_LEN_INFERENCE = 131072   # 128K en inferencia final
BATCH_SIZE = 2
GRADIENT_ACCUMULATION = 4
LR = 2e-4
SCHEDULER = "cosine"
EPOCHS = 1
OPTIMIZER = "adamw_8bit"
GRADIENT_CHECKPOINTING = "unsloth"  # CRITICAL para T4 16GB
```

### Hardware
- **VRAM mínima:** 12 GB (con Unsloth + QLoRA)
- **VRAM recomendada:** 16-24 GB
- **GPU compatible:** T4 (Colab free), P100 (Kaggle), RTX 3090/4090, A100

---

## 🚦 ¿Por Dónde Vamos?

### ✅ COMPLETADO
1. ✅ Instalado y documentado el framework Gemma4-Skills-OS
2. ✅ Creado `CLAUDE.md` para auto-activación de agentes en Claude Code
3. ✅ Procesados los 92,756 archivos del repo en formato instruction-response
4. ✅ Generados 133,864 ejemplos de fine-tuning (217MB)
5. ✅ Dataset split en 3 partes para GitHub
6. ✅ Modelo base correcto identificado: `google/gemma-4-E4B-it`
7. ✅ HF Token guardado localmente (gitignored)
8. ✅ Scripts de fine-tuning con HF Transformers
9. ✅ Script de fine-tuning con Unsloth (más rápido en T4)
10. ✅ Scripts de conversión a GGUF (Q4_K_M)
11. ✅ Modelfile de Ollama con system prompt completo (todos los agentes activos)
12. ✅ Modelfile actualizado a 128K context (`PARAMETER num_ctx 131072`)
13. ✅ **Notebook Colab listo:** `finetuning/colab/maia_finetune_colab.ipynb`
14. ✅ Pipeline completo documentado

### ⏳ PENDIENTE (Lo Que Falta)
1. ⏳ **Aceptar licencia Gemma 4 en HuggingFace** (manual del usuario)
   - URL: https://huggingface.co/google/gemma-4-E4B-it
   - Sin esto el Colab notebook fallará al descargar el modelo
2. ⏳ **Ejecutar el notebook Colab** (manual del usuario)
   - Subir el notebook a Colab
   - Conectar Drive
   - Pegar HF_TOKEN
   - Run All (~10-12h)
3. ⏳ **Validar resultados** del training (loss curves, perplexity)
4. ⏳ **Push del modelo final a HuggingFace Hub** (lo hace el notebook automáticamente)
5. ⏳ **Probar Maia con Ollama** localmente
6. ⏳ **Benchmarks de capacidades:** computer-use, voice, multi-agente

### ❌ LIMITACIONES DEL ENTORNO ACTUAL (Claude Code Sandbox)
- ❌ Sin GPU NVIDIA (CPU-only, 15GB RAM)
- ❌ Sin acceso a HuggingFace (`Host not in allowlist`)
- ❌ No puedo ejecutar el fine-tuning real desde aquí
- ❌ No puedo descargar el modelo Gemma 4 E4B
- ❌ No puedo lanzar Colab notebooks remotamente (sin MCP de Colab disponible)

---

## 🚀 Cómo Continuar el Trabajo

### Opción A: Google Colab Free (RECOMENDADO)
1. Ir a https://colab.research.google.com
2. File → Upload notebook → seleccionar `finetuning/colab/maia_finetune_colab.ipynb`
3. Runtime → Change runtime type → **T4 GPU**
4. Aceptar licencia: https://huggingface.co/google/gemma-4-E4B-it
5. Crear token HF: https://huggingface.co/settings/tokens (permisos `read+write`)
6. Pegar token cuando el notebook lo pida
7. Runtime → Run all
8. Esperar ~10-12 horas
9. El modelo se subirá automáticamente a `https://huggingface.co/<tu_user>/maia-gemma4-e4b`
10. Versión GGUF en `https://huggingface.co/<tu_user>/maia-gemma4-e4b-GGUF`

### Opción B: Kaggle Free (P100, más rápido pero limitado a 30h/semana)
- Subir notebook a Kaggle
- Activar GPU P100 en settings
- Mismo flujo que Colab

### Opción C: Servicios pago (más rápido)
- **Modal:** ~$15 total, 6-8h
- **Lambda Labs:** ~$13 total, 8-10h
- **RunPod:** ~$15 total, 8-10h
- Usar `finetuning/scripts/train_runpod.sh`

---

## 🛠️ Cómo Usar Maia (Tras Fine-tuning)

### Con Ollama (recomendado para uso local)
```bash
# Descargar GGUF de HF
ollama pull <user>/maia-gemma4-e4b-GGUF
# O usar el Modelfile local
cd finetuning
ollama create maia -f Modelfile
ollama run maia
```

### Con HuggingFace Transformers
```python
from transformers import AutoModelForCausalLM, AutoTokenizer
m = AutoModelForCausalLM.from_pretrained("<user>/maia-gemma4-e4b")
t = AutoTokenizer.from_pretrained("<user>/maia-gemma4-e4b")
```

### Con vLLM (producción)
```bash
vllm serve <user>/maia-gemma4-e4b --max-model-len 131072
```

---

## 💡 Ideas Futuras

### Mejoras al Dataset
- [ ] **Computer-use synthetic data:** Generar ejemplos de screenshot+acción para mejorar control de PC
- [ ] **Voice prompts:** Agregar ejemplos de conversaciones tipo asistente de voz (Alexa-like)
- [ ] **Tool-use traces:** Capturar trazas de uso de tools del Claude Agent SDK
- [ ] **Multi-turn conversations:** Más diálogos largos en lugar de single-turn
- [ ] **RAG integration:** Usar RAG-Anything (HKUDS) para enriquecer ejemplos con contexto multimodal

### Mejoras al Fine-tuning
- [ ] **Multi-stage training:** Pre-train en skills generales, luego fine-tune en agentes específicos
- [ ] **DPO/RLHF:** Después del SFT, aplicar Direct Preference Optimization
- [ ] **Embedding fine-tuning:** Para mejor RAG (con embeddings personalizados)
- [ ] **Multimodal training:** Aprovechar Gemma 4 E4B nativo (imagen+audio+video)

### Integraciones
- [ ] **MCP server propio de Maia:** Exponer Maia como MCP para que Claude Code la use
- [ ] **Voice integration:** Whisper (STT) + Maia + ElevenLabs/XTTS (TTS)
- [ ] **Computer-use orchestrator:** Pyautogui/Playwright + Maia
- [ ] **Web app interface:** Gradio/Streamlit con todas las capacidades
- [ ] **RAGFlow integration:** Para que Maia tenga RAG con docs externos

### Recursos útiles para retomar
- **Unsloth Gemma 4 docs:** https://unsloth.ai/docs/models/gemma-4/train
- **Gemma 4 paper:** https://deepmind.google/models/gemma/gemma-4/
- **HF blog Gemma 4:** https://huggingface.co/blog/gemma4
- **Fine-tuning expert skill:** https://github.com/Jeffallan/claude-skills
- **RAG-Anything:** https://github.com/HKUDS/RAG-Anything (multimodal RAG)
- **RAGFlow:** https://github.com/infiniflow/ragflow (production RAG)

---

## 🔐 Credenciales

### Configuradas
- ✅ `HF_TOKEN` en `.claude/settings.local.json` (gitignored)

### Requeridas para producción
- ⏳ Aceptación licencia Gemma 4 (manual)
- ⏳ Cuenta HuggingFace con token write para subir modelo final

### Opcionales (para servicios pago)
- Modal token (`modal token new`)
- RunPod API key
- Together AI API key
- Replicate API token

---

## 📝 Notas Importantes

1. **El token HF está en `.claude/settings.local.json`** y está gitignored. NO se sube al repo.
2. **El modelo Gemma 4 E4B es gated:** sin aceptar licencia, falla la descarga.
3. **El sandbox actual de Claude Code NO tiene GPU ni acceso a HF.** El fine-tuning real debe hacerse en Colab/Kaggle/etc.
4. **Para 128K context:** ya está configurado en el notebook (`INFERENCE_CTX = 131072`).
5. **Unsloth vs HF puro:** Unsloth es ~2x más rápido en T4 y consume menos VRAM. Por eso es la opción recomendada.
6. **Checkpoints a Drive:** El notebook auto-monta Drive y guarda cada 500 steps, por si Colab se desconecta puedes reanudar.
7. **GGUF Q4_K_M:** Buena calidad-tamaño para 4B. ~2.5GB final.

---

## 🤖 Para una IA que retome este trabajo

Si eres una IA leyendo esto:
1. Lee `CLAUDE.md` para ver instrucciones de auto-activación de agentes
2. Lee `finetuning/README_TRAINING.md` para detalles técnicos
3. El estado real está aquí (DOCUMENTACION.md)
4. **Lo que sigue es lanzar el notebook Colab** — no se puede hacer desde el sandbox de Claude Code
5. Si tienes acceso a un MCP de Colab/HuggingFace/Modal: úsalo para automatizar el lanzamiento
6. Verifica integridad del dataset con: `wc -l finetuning/output/maia_gemma4_finetune.jsonl.part_*` (esperado: 133,864 total)
7. Token HF en `.claude/settings.local.json` (no commitear)

### Próximo paso concreto
Ejecutar el notebook `finetuning/colab/maia_finetune_colab.ipynb` en Google Colab T4. El notebook hace TODO el resto automáticamente: descarga modelo, entrena, mergea, convierte a GGUF, sube a HF Hub.

---

## 📊 Métricas de éxito

Tras el fine-tuning, validar:
- [ ] Loss < 1.0 al final del epoch
- [ ] Perplexity en held-out < 8
- [ ] Maia responde activando los agentes correctamente
- [ ] Maia usa workflows del repo cuando se le piden tareas complejas
- [ ] Maia entiende español/inglés
- [ ] Inferencia funciona con num_ctx=131072 (128K)
- [ ] GGUF Q4_K_M corre en CPU con < 8GB RAM
- [ ] Velocidad inferencia: > 10 tokens/s en T4

---

**FIN DE LA DOCUMENTACIÓN**
