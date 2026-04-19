---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[43541]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Difficulty rating: Advanced. Given some input data, generate an algorithm to sort the data in descending order.

Contexto/Input:
3, 5, 9, 1, 8, 2

## Asistente
Step 1: Create a list and add the given elements in the list: L = [3, 5, 9, 1, 8, 2]. 
Step 2: Set a flag called swapped to False, so that you can record the swapping if it happens: swapped = False
Step 3: Set the index of last element of the list: last_index = len(L) – 1. 
Step 4: For each element in the list, move from left to right and check if the current element is greater than the last element: 
If yes, swap the elements and set the swapped flag to True.
Step 5: If the swapped flag is True, repeat steps 4 and 5. Else, the list is sorted and you can break out of the loop.
Step 6: Return the sorted list L.
