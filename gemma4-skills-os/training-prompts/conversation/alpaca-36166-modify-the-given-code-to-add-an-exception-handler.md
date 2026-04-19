---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[36166]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Modify the given code to add an exception handler.

Contexto/Input:
def divide(x, y):
  return x / y

## Asistente
def divide(x, y):
  try:
    return x / y
  except ZeroDivisionError:
    print("Cannot divide by 0")
