---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[24891]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function which takes a positive integer and returns a Fibonacci sequence up to that number

## Asistente
def fibonacci(n): 
  result = [0, 1] 
  for i in range(2, n): 
    result.append(result[i-1] + result[i-2]) 
  return result[:n]
