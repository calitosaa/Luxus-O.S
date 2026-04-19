---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5706]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm that finds the sum of the two largest numbers in an array.

Contexto/Input:
[2, 4, 9, 1, 10]

## Asistente
def find_sum_of_two_largest(arr):
    largest = max(arr)
    arr.remove(largest)
    second_largest = max(arr)
    return largest + second_largest

# Output: 11 (9 + 2)
