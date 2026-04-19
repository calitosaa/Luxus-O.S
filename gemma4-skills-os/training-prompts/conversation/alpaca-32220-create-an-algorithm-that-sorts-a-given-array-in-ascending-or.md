---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[32220]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm that sorts a given array in ascending order.

Contexto/Input:
[4, 5, 2, 1, 3]

## Asistente
A sorting algorithm to sort an array A[0…n-1] of n elements in ascending order:

1. For i = 0 to n-2
2. Set min = i
3. For j = i+1 to n-1
4.  If A[j] < A[min], set min = j
5.  Exchange elements A[i] and A[min]
6. End loop
7. End loop
