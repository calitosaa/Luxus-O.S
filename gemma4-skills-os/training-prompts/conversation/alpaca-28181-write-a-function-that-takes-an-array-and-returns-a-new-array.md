---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28181]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function that takes an array and returns a new array with only the even numbers from the original array.

Contexto/Input:
[1, 2, 3, 4, 5, 6, 7, 8]

## Asistente
const evenNumberArray = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num % 2 === 0) {
            newArray.push(num);
        }
    }
    return newArray;
}
 
const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(evenNumberArray(array)); // Output: [2, 4, 6, 8]
