---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[37540]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to find the closest pair of elements in a sorted array.

Contexto/Input:
[1, 3, 4, 7, 8, 13]

## Asistente
def closestPair(arr):
  diff = float('inf')
  num1 = 0
  num2 = 0
  for i in range(len(arr)-1):
    temp_diff = arr[i+1] - arr[i]
    if temp_diff < diff:
      diff = temp_diff
      num1 = arr[i]
      num2 = arr[i+1]
  return (num1, num2)
