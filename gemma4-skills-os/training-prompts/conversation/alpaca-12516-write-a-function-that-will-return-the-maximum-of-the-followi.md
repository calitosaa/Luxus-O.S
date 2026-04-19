---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[12516]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function that will return the maximum of the following numbers.

Contexto/Input:
1, 5, 23, 9

## Asistente
def find_max(nums):
    biggest = nums[0]
    for num in nums:
        if num > biggest:
            biggest = num
    return biggest

print(find_max([1, 5, 23, 9]))

Output: 23
