---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[11449]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function that takes a list of numbers and returns the second largest number in that list.

Contexto/Input:
[3, 6, 11, 25, 0, 17]

## Asistente
def second_largest(list_of_numbers): 
  largest = max(list_of_numbers) 
  temp = list_of_numbers.remove(largest) 
  return max(temp) 

second_largest([3, 6, 11, 25, 0, 17]) # Returns 17
