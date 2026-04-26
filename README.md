# Maia — Gemma 4 E4B Fine-tuned LLM

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/calitosaa/Maia/blob/main/finetuning/colab/maia_finetune_colab.ipynb)

LLM personalizado basado en **Gemma 4 E4B** (Google, 4B effective params, 128K context, multimodal) fine-tuneado con el framework **Gemma4-Skills-OS** (55+ agentes, 39K skills, 4.8K workflows).

## 🚀 Lanzar fine-tuning (3 clicks)

1. **Aceptar licencia Gemma 4** → https://huggingface.co/google/gemma-4-E4B-it (1 click "Acknowledge")
2. **Click el badge "Open In Colab"** ↑ arriba
3. **Runtime → Run all** (en Colab) — esperar ~10-12h

El notebook auto-sube **Maia** a `huggingface.co/<tu_usuario>/maia-gemma4-e4b` (HF) y `-GGUF` (Ollama).

## 📦 Tras fine-tuning, usar Maia

```bash
ollama pull <user>/maia-gemma4-e4b-GGUF
ollama run maia
```

## 📚 Documentación completa

Ver [`DOCUMENTACION.md`](./DOCUMENTACION.md) — estado del proyecto, qué hay hecho, qué falta, cómo retomar.

## 📊 Stats

- **Dataset:** 133,864 ejemplos (217 MB)
- **Base model:** `google/gemma-4-E4B-it`
- **Method:** QLoRA 4-bit (Unsloth) + LoRA r=16
- **Context:** 8K training / 128K inference
- **GPU:** Free Colab T4 (16 GB VRAM)
- **Tiempo:** ~10-12h
- **Costo:** $0 (Colab Free)
