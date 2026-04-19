---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[7068]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given a problem, design an algorithm to solve it.

Contexto/Input:
Given an array of n integers, find the maximum sum of consecutive elements in the array.

## Asistente
Algorithm to find the maximum sum of consecutive elements in an array:
1. Initialize max_sum and current_sum with 0.
2. Iterate over array A.
3. Add the current element in the array to current_sum.
4. Compare the current_sum and the max_sum and assign the bigger one to max_sum.
5. If current_sum is negative, set it to 0.
6. After iterating over the array A, max_sum is the desired output.
