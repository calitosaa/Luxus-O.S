---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[23265]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
For a given array arr, write a program to sort the array in-place without using any sort function.

Contexto/Input:
arr = [5,7,3,9,10,1]

## Asistente
def sort(arr): 
    n = len(arr) 
    for i in range(n): 
  
        min_idx = i 
        for j in range(i+1, n): 
            if arr[min_idx] > arr[j]: 
                min_idx = j 
          
        arr[i], arr[min_idx] = arr[min_idx], arr[i] 
  
arr = [5, 7, 3, 9, 10, 1] 
sort(arr) 

print ("Sorted array:") 
for i in range(len(arr)): 
    print("%d" %arr[i]),
