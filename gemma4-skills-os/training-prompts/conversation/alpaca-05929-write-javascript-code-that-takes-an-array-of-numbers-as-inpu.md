---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5929]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write JavaScript code that takes an array of numbers as input and returns a copy of the array without any of the duplicate numbers.

Contexto/Input:
[1, 2, 3, 2, 4, 5, 6, 7, 1, 4]

## Asistente
const uniqueArray = arr => { 
  const seen = {}; 
  const output = []; 
  
  for (let i = 0; i < arr.length; i++) { 
    if (!seen[arr[i]]) { 
      seen[arr[i]] = true; 
      output.push(arr[i]); 
    } 
  } 
  return output; 
} 

console.log (uniqueArray([1, 2, 3, 2, 4, 5, 6, 7, 1, 4])); 
// Output: [1, 2, 3, 4, 5, 6, 7]
