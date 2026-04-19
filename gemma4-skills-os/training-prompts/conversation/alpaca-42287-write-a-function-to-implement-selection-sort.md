---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[42287]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to implement selection sort.

## Asistente
def selection_sort(nums):
    for i in range(len(nums)):
        min_idx = i
        for j in range(i + 1, len(nums)):
            if nums[min_idx] > nums[j]:
                min_idx = j

        nums[i], nums[min_idx] = nums[min_idx], nums[i]
