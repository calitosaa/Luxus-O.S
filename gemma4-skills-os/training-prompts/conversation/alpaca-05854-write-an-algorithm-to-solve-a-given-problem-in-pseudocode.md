---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5854]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm to solve a given problem in pseudocode.

Contexto/Input:
Problem: Suppose we want to find the smallest number in a given array.

## Asistente
//input: array of numbers

//output: smallest number in array

min_num = null

for each number in array:
    if min_num is null
        min_num = number
    else if number < min_num
        min_num = number

return min_num;
