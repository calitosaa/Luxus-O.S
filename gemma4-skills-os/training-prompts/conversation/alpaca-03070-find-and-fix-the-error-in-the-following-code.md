---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[3070]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Find and fix the error in the following code.

Contexto/Input:
```python
def myFunc(x):
    if (x == 0 {
        return 0
    } else {
        return x * 2
    }
```

## Asistente
```python
def myFunc(x):
    if (x == 0):
        return 0
    else:
        return x * 2
```
