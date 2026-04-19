---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[1065]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function that takes in a list of numbers and returns a list of the numbers in reverse order.

## Asistente
"""
Function to reverse a list of numbers
"""

def reverse_list(input_list):
    reverse_list = input_list.copy()
    reverse_list.reverse()
    return reverse_list

if __name__ == '__main__':
    l = [1, 2, 3, 4, 5]
    print(reverse_list(l))
    # Output: [5, 4, 3, 2, 1]
