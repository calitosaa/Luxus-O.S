# Maia Fine-tuning Pipeline

Fine-tunea **Gemma 4 E4B** (`google/gemma-4-E4B-it`) con todo el framework Gemma4-Skills-OS para crear **Maia**.

## Stats del Dataset

- **Total ejemplos:** 133,864
- **Tamaño:** 217 MB (split en 3 partes para GitHub)
- **Formato:** JSONL con messages (Gemma chat template)
- **Distribución:**
  - Training prompts (system behaviors): 88,080
  - Skills (9 categorías, todas las del repo): 39,176
  - Workflows (Ruflo): 4,834
  - Logic patterns: 1,138
  - Agents (55+ agentes): 622
  - Reasoning patterns: 14

## Cómo entrenar

### Opción 1: Cloud GPU (recomendado)

**Requisitos:** 24GB+ VRAM (RTX 4090 / A100 / H100).

```bash
# 1. Acepta licencia Gemma 4 en HuggingFace
# 2. Clona el repo en una máquina con GPU
git clone https://github.com/calitosaa/Maia
cd Maia/finetuning

# 3. Login HF
huggingface-cli login

# 4. Run pipeline
bash scripts/train_runpod.sh
```

Output:
- `output_model/maia-final/` → Modelo HF mergeado (safetensors)
- `output_model/maia.gguf` → Modelo cuantizado Q4_K_M para Ollama

### Opción 2: Google Colab Pro+ (A100 40GB)

```python
!git clone https://github.com/calitosaa/Maia
%cd Maia/finetuning
!bash scripts/train_runpod.sh
```

### Opción 3: Modal / RunPod / Lambda Labs

Usar `scripts/finetune_maia.py` directamente con su infraestructura.

## Configuración

- **Base model:** `google/gemma-4-E4B-it`
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
