---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[33318]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Develop a code to create a dictionary with the length of each word in the given sentence.

Contexto/Input:
sentence = "Welcome to the world of Python programming"

## Asistente
def word_count(sentence): 
  words = sentence.split(" ") 
  word_dict = {}

  for word in words: 
    word_dict[word] = len(word) 
  
  return word_dict

sentence = "Welcome to the world of Python programming"

print(word_count(sentence))

# Output 
# {'Welcome': 7, 'to': 2, 'the': 3, 'world': 5, 'of': 2, 'Python': 6, 'programming': 11}
