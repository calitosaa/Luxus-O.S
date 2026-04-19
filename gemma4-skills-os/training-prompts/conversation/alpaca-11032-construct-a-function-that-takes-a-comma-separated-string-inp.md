---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[11032]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a function that takes a comma-separated string input and returns the words that appear in both strings.

## Asistente
def find_common_words(s1, s2):
    # split the strings and store them into two lists
    list1 = s1.split(', ')
    list2 = s2.split(', ')
    # create a set of words that appear in both strings
    common_words = set(list1).intersection(list2)
  
    # return the words
    return common_words
