---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[20522]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a function that sorts a given array of numbers in descending order.

Contexto/Input:
[4, 8, 2, 3, 0, 10]

## Asistente
def descending_sort(arr):
    arr.sort(reverse = True)
    return arr
