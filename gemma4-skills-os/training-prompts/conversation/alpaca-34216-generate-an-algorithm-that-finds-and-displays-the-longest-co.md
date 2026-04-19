---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[34216]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate an algorithm that finds and displays the longest common substring between two strings of text.

Contexto/Input:
String 1: This is an example
String 2: This string should contain the example

## Asistente
1. Split the two strings into arrays of characters
2. Initialize two variables and a two-dimensional array for lengths of the longest common substring
3. For each character in the array, compare with the character from the same index in the other string to check for a match
4. If there is a match, add 1 to the length variable, and update the two-dimensional array 
5. If the length variable is greater than the entry in the two-dimensional array, update the array with the new length value 
6. After all the characters have been compared, return the maximum value in the two-dimensional array as the length of the longest common substring 
7. Initialize an empty string to store the longest common substring
8. Traverse through the two-dimensional array to find the indices of the maximum value
9. For each index, starting from the maximum value, add the characters at that index in the two strings to the empty string
10. After all the indices have been traversed, return the full string as the longest common substring
