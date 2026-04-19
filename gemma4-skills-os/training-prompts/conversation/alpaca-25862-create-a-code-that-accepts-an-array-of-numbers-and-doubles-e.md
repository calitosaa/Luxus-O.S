---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[25862]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a code that accepts an array of numbers and doubles each of them.

Contexto/Input:
[1,2,3,4]

## Asistente
// Function to double each element in an array
function doubleArray(arr) {
  //Loop over each element in the array
  for (var i = 0; i < arr.length; i++) {
    //Double the element
    arr[i] = arr[i] * 2;
  }
  //Return the modified array
  return arr;
}
