---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5935]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm that takes a list of strings as input and returns a list of strings that contain two or more words.

Contexto/Input:
[“one”, “two”, “three”, “four”]

## Asistente
def two_words(string_list): 
  result = [] 
  for s in string_list: 
    if len(s.split()) >= 2: 
      result.append(s) 
  return result 

string_list = ["one","two","three","four"]

print(two_words(string_list))
# Output: ["two", "three", "four"]
