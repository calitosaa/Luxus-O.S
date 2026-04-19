---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[35657]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm that can sort an array of numbers into ascending order.

Contexto/Input:
[5, 2, 8, 1, 4]

## Asistente
"""
Algorithm to sort an array of numbers into ascending order
"""

def sort_ascending(nums):
    sorted_list = []
    while nums:
        lowest = nums[0]
        for num in nums:
            if num < lowest:
                lowest = num
        sorted_list.append(lowest)
        nums.remove(lowest)

    return sorted_list

if __name__ == '__main__':
    unsorted = [5, 2, 8, 1, 4]
    print(sort_ascending(unsorted)) #[1, 2, 4, 5, 8]
