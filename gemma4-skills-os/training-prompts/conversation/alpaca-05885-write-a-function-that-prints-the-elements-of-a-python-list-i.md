---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5885]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function that prints the elements of a Python list in reverse order.

## Asistente
def print_list_reversed(lst):
    for i in range(len(lst)-1, -1, -1):
        print(lst[i])

print_list_reversed([1,2,3,4,5])

# Output: 5 4 3 2 1
