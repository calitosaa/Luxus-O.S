---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[728]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a pseudocode for sorting an array.

## Asistente
a. Set a pointer low to the first element in the array
b. Set a pointer high to the last element in the array
c. While the low pointer is less than the high pointer 
d. If the element at the low pointer is higher than the element at the high pointer 
  i. Swap the elements
  ii. Increment the low pointer by 1
  iii. Decrement the high pointer by 1
e. Repeat step c until the low pointer is equal or higher than the high pointer
f. Sort the elements in the subarray between the two pointers using the same procedure 
g. Repeat until the subarray is fully sorted
