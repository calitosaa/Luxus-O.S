---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[31379]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design an algorithm to find the first non-repeatable character in the given string.

## Asistente
def firstNonRepeatChar(string): 
    # create a dictionary of characters
    char_dict = dict() 
  
    # iterate over the string
    for i in string: 
        # check if the char is already in the dictionary
        if i in char_dict: 
            char_dict[i] += 1
        # add the char if it is not in the dictionary
        else: 
            char_dict[i] = 1
  
    # iterate for the first unique char 
    for i, j in char_dict.items(): 
        if j==1: # return the char
            return i 
  
    # return -1 when all chars are repeated
    return -1
