---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[22740]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function to calculate aspect ratio given two inputs

Contexto/Input:
width = 400, height = 600

## Asistente
def aspect_ratio(width, height):
  return width / height

aspect_ratio(400, 600)  # Output: 0.6666666666666666
