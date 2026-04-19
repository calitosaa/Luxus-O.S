---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[33447]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given the below list of strings, remove the duplicates and sort the list in descending order.

Contexto/Input:
[“Apple”, “Orange”, “Apple”, “Banana”]

## Asistente
The list should return [“Orange”, “Banana”, “Apple”]

def remove_duplicates(lst): 
    unique_list = [] 
  
    for x in lst: 
        if x not in unique_list: 
            unique_list.append(x) 
  
    unique_list.sort(reverse=True) # sort in descending order
  
    return unique_list
