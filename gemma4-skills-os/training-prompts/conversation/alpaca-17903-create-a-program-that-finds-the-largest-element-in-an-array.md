---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[17903]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program that finds the largest element in an array

Contexto/Input:
[2, 4, 6, 8, 10]

## Asistente
"""
Write a program that finds the largest element in an array
"""

def largest_element(arr):
    max_element = arr[0]
    
    for element in arr:
        if element > max_element:
            max_element = element
            
    return max_element

if __name__ == '__main__':
    arr = [2,4,6,8,10]
    print('The largest element in the array is ', largest_element(arr))
