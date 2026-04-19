---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[27838]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm that takes three numbers as input and returns their average.

Contexto/Input:
Integer A = 5, Integer B = 10, Integer C = 15

## Asistente
def calculateAverage(a, b, c): 
  return (a + b + c) / 3 
  
average = calculateAverage(5, 10, 15)
print(average) # Output: 10.0
