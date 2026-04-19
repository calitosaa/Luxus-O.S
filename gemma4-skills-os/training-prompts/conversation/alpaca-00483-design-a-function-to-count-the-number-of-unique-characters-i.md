---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[483]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design a function to count the number of unique characters in a string.

Contexto/Input:
string = “Butterflies”

## Asistente
def count_unique_chars(string):
  char_dict = {}
  for char in string:
    if char in char_dict:
      char_dict[char] += 1
    else:
      char_dict[char] = 1
  return len(char_dict)

print(count_unique_chars("Butterflies"))
# Output: 9
