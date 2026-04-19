---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[25048]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm in pseudocode that sorts an array of numbers using the selection sort method.

Contexto/Input:
Array: [3, 1, 4, 7, 8, 2]

## Asistente
algorithm SelectionSort(A : list of sortable items)
  // ... set input parameter
  n = length(A)    // ... calculate array size
 
  for i = 1 to n - 1
    // ... loop over items
    min = i
 
    for j = i + 1 to n
      // ... find minimum item
      if A[j] < A[min]
        min = j
    end for
 
    // ... swap minimum item
    if i != min
      swap(A[i], A[min])
    end if
 
  end for

end SelectionSort
