---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[4741]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given a list of numbers, write a code to calculate the arithmetic mean.

Contexto/Input:
[25, 20, 15, 8, 5]

## Asistente
def calculate_mean(numbers):
  total = 0
  for number in numbers:
    total += number
  mean = total / len(numbers)
  return mean

calculate_mean([25, 20, 15, 8, 5])
