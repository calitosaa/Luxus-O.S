---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[41473]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program to sort a given numerical array.

Contexto/Input:
[4, 2, 5, 1, 3]

## Asistente
The following program sorts an array of numbers in ascending order: 

def sort_array(array): 
    for i in range(len(array)): 
        min_index = i 
        for j in range(i+1, len(array)): 
            if array[min_index] > array[j]: 
                min_index = j 
        
        array[i], array[min_index] = array[min_index], array[i] 
    return array 

print(sort_array([4, 2, 5, 1, 3]))  # [1, 2, 3, 4, 5]
