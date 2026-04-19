---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[26584]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a sorting algorithm for a given set of numbers.

Contexto/Input:
[6, 2, 8, 3, 1, 2]

## Asistente
def sort(nums):
    for i in range(len(nums)-1):
        min_index = i
        for j in range(i+1, len(nums)):
            if nums[min_index] > nums[j]:
                min_index = j
        nums[i], nums[min_index] = nums[min_index], nums[i]
    return nums
