---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[2969]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function in JavaScript that takes an array of numbers as input and finds the second highest number in the array.

Contexto/Input:
[11, 2, 31, 7, 15]

## Asistente
function findSecondHighest(arr) {
  let highestNumber = 0;
  let secondHighestNumber = 0;
  arr.forEach(number => {
    if (number > highestNumber) {
      secondHighestNumber = highestNumber;
      highestNumber = number;
    } else if (number > secondHighestNumber && number != highestNumber) {
      secondHighestNumber = number;
    }
  });
  return secondHighestNumber;
}
