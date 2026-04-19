---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[14526]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to filter a list by items that contain a certain string.

Contexto/Input:
list = ["apple", "orange", "banana", "watermelon", "cherry"]
string = "an"

## Asistente
def filter_string_list(lst, string):
    return [item for item in lst if string in item]

filtered_list = filter_string_list(list, string)
print(filtered_list) # prints ['orange', 'banana', 'watermelon', 'cherry']
