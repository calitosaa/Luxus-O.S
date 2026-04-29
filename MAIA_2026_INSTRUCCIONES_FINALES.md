# MAIA 2026 - INSTRUCCIONES DE EJECUCIÓN FINAL

## ¿QUÉ VAMOS A HACER?

Entrenar el LLM MAIA 2026 usando:
- **Base Model**: Gemma 4 E4B (google/gemma-2-4b)
- **Training**: SFT (10-12 horas) + DPO (4-6 horas) en Colab T4 Free
- **Datos**: 133,864 ejemplos SFT + 550 preference pairs DPO
- **Agentes**: 55 agentes activados durante training
- **Skills**: 44,724 skills indexados y disponibles
- **Output**: Modelo final subido a HuggingFace Hub

---

## PASO 1: PREPARAR HF_TOKEN

### Opción A: Usar token existente (SI YA LO TIENES)
```bash
export HF_TOKEN='tu_token_aqui'
```

### Opción B: Generar nuevo token
1. Ve a: https://huggingface.co/settings/tokens
2. Click "New token"
3. Name: "MAIA Training 2026"
4. Role: "write"
5. Copiar token
6. En Colab: Settings → Secrets → Agregar `HF_TOKEN`

---

## PASO 2: ACEPTAR LICENCIA GEMMA 4 E4B

1. Ve a: https://huggingface.co/google/gemma-2-4b
2. Click azul grande: **"Agree and access repository"**
3. Confirma el acuerdo de licencia
4. LISTO ✓

*(Esto es requerido por Huggingface - sin esto no puedes descargar el modelo)*

---

## PASO 3: EJECUTAR EN GOOGLE COLAB

### 3.1 Crear nuevo notebook
1. Ve a: https://colab.research.google.com
2. Click "New notebook"

### 3.2 Copiar script
1. Abre archivo: `/home/user/Maia/MAIA_2026_COLAB_READY.py`
2. Copia TODO el contenido
3. En Colab: pega en la PRIMERA celda

### 3.3 Configurar HF_TOKEN en Colab Secrets
1. Click icono 🔑 en panel izquierdo de Colab
2. Click "Add new secret"
3. Name: `HF_TOKEN`
4. Value: *tu_token_aqui*
5. Click "Add secret"

### 3.4 EJECUTAR
- Click ▶ para ejecutar la celda
- Espera a que termine (14-18 horas)
- La celda mostrará:
  - Progreso de descarga de modelos
  - Progreso de SFT training (10-12h)
  - Progreso de DPO training (4-6h)
  - Upload automático a HF

### 3.5 Monitorear progreso
- Los logs se muestran en tiempo real
- Google Drive checkpoint cada 500 pasos (automático)
- Si se desconecta: Colab guarda checkpoints, puede resumir

---

## PASO 4: VERIFICAR RESULTADO

Cuando termine, verás:
```
✓✓✓ MAIA 2026 TRAINING COMPLETE ✓✓✓
Final model: https://huggingface.co/calitosaa/maia-2026
```

El modelo estará en: `https://huggingface.co/calitosaa/maia-2026`

---

## PASO 5: USAR EL MODELO

```python
from transformers import pipeline

# Cargar modelo entrenado
generator = pipeline("text-generation", model="calitosaa/maia-2026")

# Generar respuesta
response = generator("¿Qué es DPO?", max_length=256)
print(response[0]['generated_text'])
```

---

## QUÉ HACE EL SCRIPT AUTOMÁTICAMENTE

✓ Descarga Gemma 4 E4B  
✓ Carga 133K SFT ejemplos  
✓ Carga 550 DPO preference pairs  
✓ STAGE 1: Entrena SFT (10-12h)  
✓ STAGE 2: Entrena DPO (4-6h)  
✓ Evalúa en 3 prompts  
✓ Sube SFT model a HF: calitosaa/maia-2026-sft  
✓ Sube DPO model final a HF: calitosaa/maia-2026  
✓ Genera logs completos  
✓ Maneja errores automáticamente  

---

## ARCHIVOS PREPARADOS

En este repositorio encontrarás:

| Archivo | Propósito |
|---------|-----------|
| `MAIA_2026_COLAB_READY.py` | Script Colab única celda (USA ESTE) |
| `MAIA_2026_COMPLETE_AUTOMATED.py` | Script Python puro automatizado |
| `MAIA_2026_FINAL/` | Manifiestos de agentes, skills, configs |
| `finetuning/output/maia_training_merged_sft.jsonl` | Dataset SFT (133K ejemplos) |
| `finetuning/output/preference_pairs_dpo.jsonl` | DPO pairs (550 pares) |
| `finetuning/output/training_config.json` | Config multi-stage |

---

## RESOLUCIÓN DE PROBLEMAS

### "ModuleNotFoundError: No module named 'torch'"
→ Ejecuta otra vez, el pip install necesita tiempo

### "Could not authenticate with Hugging Face"
→ Verifica que HF_TOKEN esté en Colab Secrets (🔑)

### "License not accepted for Gemma 4"
→ Ve a https://huggingface.co/google/gemma-2-4b y acepta manualmente

### "CUDA out of memory"
→ Colab T4 tiene suficiente memoria (16GB), esto no debería pasar

### "Training interrupted / Colab disconnected"
→ Los checkpoints están en Google Drive (/content/drive/MyDrive/maia_checkpoints_2026)
→ Ejecuta nuevamente - continuará desde checkpoint

---

## RESUMEN FINAL

| Item | Detalle |
|------|---------|
| **Model** | Gemma 4 E4B (4B parámetros, 128K context) |
| **Training** | SFT (10-12h) + DPO (4-6h) = 14-18 horas total |
| **Hardware** | Colab T4 Free (16GB VRAM) |
| **Datos** | 133,864 SFT + 550 DPO pairs |
| **Agentes** | 55 agentes activados |
| **Skills** | 44,724 skills disponibles |
| **Output** | Modelo en HuggingFace Hub (calitosaa/maia-2026) |
| **Costo** | $0 (Colab Free) |

---

## ¡LISTO!

Sigue estos 5 pasos y el modelo estará entrenado en ~18 horas.

El script maneja TODO automáticamente.

**Vamos a entrenar el mejor LLM de 4B parámetros con todos nuestros agentes y skills! 🚀**
