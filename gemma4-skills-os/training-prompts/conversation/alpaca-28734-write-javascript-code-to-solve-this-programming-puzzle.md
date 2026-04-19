---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28734]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write JavaScript code to solve this programming puzzle.

Contexto/Input:
Given a string, find the length of the longest substring without repeating characters.

Example:

Input: "abcabcbb"
Output: 3

## Asistente
function lengthOfLongestSubstring(str) { 
  
    // initialize a string variable and an array variable
    let currentString = " ", 
        charIndexes = []; 
  
    // iterate through the string
    for (let i = 0; i < str.length; i++) { 
  
        // if the character is in the map, update the index to the current
        if (charIndexes.includes(str[i])) { 
            charIndexes = charIndexes.slice(charIndexes.indexOf(str[i]) + 1); 
        } 
  
        // add the character its index to the array
        charIndexes.push(str[i]); 
  
        // update the current string
        currentString = (currentString.length < charIndexes.length) ? charIndexes.join("") : currentString; 
    } 
  
    // return the output
    return currentString.length; 
}
