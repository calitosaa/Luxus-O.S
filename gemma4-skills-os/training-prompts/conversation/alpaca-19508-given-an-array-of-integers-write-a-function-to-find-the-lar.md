---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[19508]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given an array of integers, write a function to find the largest number in the array.

Contexto/Input:
[1, 6, 5, 9, 8]

## Asistente
"""
Given an array of integers, this function will find the largest number:
"""

def largest(arr):
    largest_num = arr[0]
    for i in range(1, len(arr)):
        if arr[i] > largest_num:
            largest_num = arr[i]
    return largest_num

if __name__ == '__main__':
    arr = [1, 6, 5, 9, 8] 
    print(largest(arr)) #Output: 9
