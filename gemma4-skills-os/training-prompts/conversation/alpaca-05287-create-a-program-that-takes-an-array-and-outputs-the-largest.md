---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5287]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program that takes an array and outputs the largest element

Contexto/Input:
[1, 3, 15, 20, 8, 9]

## Asistente
def largest_element(arr):
    """
    Takes an array of elements and returns the largest element in the array 

    Parameters:
    arr (list): Array of integers 

    Returns:
    largest (int): Largest element in array 
    """

    # Initialise largest as the first element in array
    largest = arr[0]

    # Iterate through rest of elements in array
    for i in range(1, len(arr)):
        # Update largest if element is larger
        if arr[i] > largest:
            largest = arr[i]
    # Return the largest element
    return largest
