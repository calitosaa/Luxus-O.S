---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[19079]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a python program that takes a list of integers and output a new list with unique elements of the supplied list

Contexto/Input:
[1,2,3,3,3,3,4,5]

## Asistente
def unique_list(list1): 
    unique_list = [] 
  
    for x in list1: 
        if x not in unique_list: 
            unique_list.append(x) 
    return unique_list
  
list1 = [1,2,3,3,3,3,4,5] 
print(unique_list(list1))
