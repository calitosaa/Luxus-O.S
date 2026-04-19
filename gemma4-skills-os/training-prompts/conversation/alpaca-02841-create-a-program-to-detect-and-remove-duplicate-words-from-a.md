---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[2841]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program to detect and remove duplicate words from a given sentence

Contexto/Input:
No input

## Asistente
def remove_duplicates(sentence):
  word_list = sentence.split() # split sentence into a list of words
  new_list = [] # new list that will contain uniques words

  # loop thru each word in the list
  for word in word_list:
    if word not in new_list: # add a word to the new list if the word is unique
      new_list.append(word)

  # join words in the new list to form a new sentence
  return ' '.join(new_list)
