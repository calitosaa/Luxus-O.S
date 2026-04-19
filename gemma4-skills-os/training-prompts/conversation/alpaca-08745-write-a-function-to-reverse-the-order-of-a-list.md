---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[8745]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to reverse the order of a list.

Contexto/Input:
list1 = [10, 20, 30, 40]

## Asistente
def reverse_list(list1):
  return list1[::-1]
  
list1 = [10, 20, 30, 40]

list1 = reverse_list(list1)

print(list1)

# Output: [40, 30, 20, 10]
