---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[16608]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write pseudocode for a program to calculate the average of a list of numbers.

## Asistente
// Function to calculate average of numbers in a list

FUNCTION avg(list)

  total = 0
  // Iterate over all the elements in the list
  FOR i = 0 to list.length-1
     total += list[i] // add each item in the list to total
  END FOR

  RETURN total/list.length // return average

END FUNCTION
