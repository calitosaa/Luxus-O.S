# Maia Model Info

## Estado actual

✅ **Pipeline completo de fine-tuning preparado**
✅ **Dataset listo:** 133,864 ejemplos (217 MB)
✅ **Scripts de entrenamiento:** QLoRA optimizado para Gemma 4 E4B
✅ **Modelfile Ollama:** System prompt completo activando todos los agentes
✅ **Conversión GGUF:** Script automático llama.cpp Q4_K_M

⚠️ **Pendiente de ejecución en GPU:**
La descarga del modelo base Gemma 4 E4B y el fine-tuning real requieren:
- GPU con 24GB+ VRAM (sandbox actual sin GPU)
- Acceso a HuggingFace (sandbox actual con allowlist restringido)
- Aceptación de licencia Gemma 4 (requiere cuenta HF)

## Para completar el entrenamiento

Ejecuta en una máquina GPU con acceso a internet:

```bash
git clone https://github.com/calitosaa/Maia
cd Maia/finetuning
huggingface-cli login   # Acepta Gemma 4 license antes en HF
bash scripts/train_runpod.sh
```

## Output esperado

Tras la ejecución se generan:
- `output_model/maia-final/` → modelo HF Transformers (safetensors, ~8GB)
- `output_model/maia.gguf` → modelo cuantizado Q4_K_M (~2.5GB para Ollama)
- `output_model/maia-lora-adapter/` → solo adapter LoRA (~50MB)

## Recursos por proveedor

| Proveedor | GPU | $/hora | Tiempo estimado | Costo total |
|-----------|-----|--------|----------------|-------------|
| RunPod    | A100 80GB | $1.89 | 8-10h | ~$15-19 |
| Lambda Labs | A100 40GB | $1.29 | 10-12h | ~$13-16 |
| Modal     | A100 40GB | $1.71 | 8-10h | ~$14-17 |
| Google Colab Pro+ | A100 40GB | $50/mes | 10-12h | $50/mes |
| Vast.ai   | RTX 4090 | $0.50 | 14-18h | ~$7-9 |
