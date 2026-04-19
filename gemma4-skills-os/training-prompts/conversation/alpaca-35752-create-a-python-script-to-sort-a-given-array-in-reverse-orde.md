---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[35752]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a Python script to sort a given array in reverse order.

Contexto/Input:
array = [10, 2, 5, -4, 92, 101]

## Asistente
def sort_reverse(array): 
  
    # Traverse array from last 
    # to first element 
    for i in range(len(array)-1, 0, -1): 
  
        # Find index of the maximum element 
        max_idx = 0
        for j in range(1, i+1): 
            if array[j] > array[max_idx]: 
                max_idx = j 
  
        # Swap maximum element with 
        # current element 
        array[i], array[max_idx] = array[max_idx], array[i] 
  
    return array 
  
# Driver code 
array = [10, 2, 5, -4, 92, 101]
print(sort_reverse(array))
