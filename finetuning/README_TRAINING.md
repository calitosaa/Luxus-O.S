# Maia Fine-tuning Pipeline

Fine-tunea **Gemma 4 E4B** (`unsloth/gemma-4-E4B-it`) con todo el framework Gemma4-Skills-OS para crear **Maia**.

## ⚡ Entrenamiento rápido (un clic, GRATIS)

**Notebook definitivo listo para Google Colab T4 (gratis):**

👉 [`finetuning/colab/MAIA_TRAIN_FINAL.ipynb`](colab/MAIA_TRAIN_FINAL.ipynb)

**Pasos:**
1. Abre el notebook en Google Colab
2. Activa GPU T4: `Entorno de ejecución → Cambiar tipo → T4`
3. Añade tu HF token en Secrets: nombre = `HF_TOKEN`
4. `Entorno de ejecución → Ejecutar todo`
5. Al final el modelo aparece en tu HuggingFace Hub listo para descargar

**Tiempo:** ~14-18h (puede requerir **Colab Pro** — límite 12h en versión gratuita) | **Coste:** $0  
**Modo prueba rápida:** pon `SAMPLE_SIZE = 5000` en la celda de config para un run corto

---

## Stats del Dataset

- **Total ejemplos:** 133,878 (133,864 base + 8 knowledge + ~6 extras)
- **Datos válidos:** >99.99% (verificado)
- **Tamaño:** 217 MB (split en 3 partes para GitHub)
- **Formato:** JSONL con messages (Gemma chat template)
- **Distribución:**
  - Training prompts (system behaviors): 88,080
  - Skills (9 categorías, todas las del repo): 39,176
  - Workflows (Ruflo): 4,834
  - Logic patterns: 1,138
  - Agents (55+ agentes): 622
  - Reasoning patterns: 14
  - Knowledge expansion 2025-2026: 8

## Cómo entrenar

### Opción 1: Google Colab T4 GRATIS (recomendado)

Usa el notebook `finetuning/colab/MAIA_TRAIN_FINAL.ipynb` (ver instrucciones arriba).

### Opción 2: Cloud GPU dedicada (RunPod / Lambda Labs / A100)

**Requisitos:** 24GB+ VRAM.

```bash
git clone https://github.com/calitosaa/Maia
cd Maia/finetuning
huggingface-cli login
bash scripts/train_runpod.sh
```

Output:
- `output_model/maia-final/` → Modelo HF mergeado (safetensors)
- `output_model/maia.gguf` → Modelo cuantizado Q4_K_M para Ollama

### Opción 3: Script directo

Usar `scripts/finetune_maia.py` con cualquier infraestructura GPU.

## Configuración

- **Base model:** `unsloth/gemma-4-E4B-it`
- **Method:** QLoRA (4-bit + LoRA r=16, α=32)
- **Target modules:** q,k,v,o,gate,up,down projections
- **Optimizer:** paged_adamw_8bit
- **LR:** 2e-4 cosine schedule
- **Epochs:** 1 (con 133K ejemplos = ~16K steps con bs=8)
- **Tiempo estimado:** ~6-12h en A100 40GB

## Inferencia con Maia

### Con Ollama
```bash
ollama create maia -f Modelfile
ollama run maia "Hola, ¿qué puedes hacer?"
```

### Con HF Transformers
```python
from transformers import AutoModelForCausalLM, AutoTokenizer
m = AutoModelForCausalLM.from_pretrained("output_model/maia-final")
t = AutoTokenizer.from_pretrained("output_model/maia-final")
```

## Capacidades de Maia

Después del fine-tuning, Maia tendrá internamente:
- 55+ agentes (orchestrator, RAG, reasoning, vision, code, etc.)
- 4,834 workflows pre-entrenados (Ruflo swarm)
- 9 categorías de skills
- Comprensión de lógica decisional
- Capacidades multimodales heredadas de Gemma 4 E4B (texto+imagen+video+audio)
- Computer use, voice assistant, automation
- Soporte español nativo

## Notas

- Gemma 4 E4B es un modelo "gated" en HF: requiere aceptar términos en https://huggingface.co/google/gemma-4-E4B-it
- Para CPU-only inference se recomienda usar el GGUF Q4_K_M (~2.5GB)
- El System Prompt del Modelfile activa automáticamente todos los agentes
