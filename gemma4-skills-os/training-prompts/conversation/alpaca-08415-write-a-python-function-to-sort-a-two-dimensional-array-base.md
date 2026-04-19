---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[8415]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a Python function to sort a two-dimensional array based on a given column index

Contexto/Input:
Array = [[1,2,3], [4,5,6], [7,8,9]]
Column index = 2

## Asistente
def sortByColIndex(arr, col_index): 
  
    arr.sort(key=lambda x : x[col_index]) 
    return arr 

sortedArray = sortByColIndex(arr, 2) 
print(sortedArray) 

Output:
[[3, 2, 1], [6, 5, 4], [9, 8, 7]]
