---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[1660]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program that sorts a list of numbers in ascending order.

Contexto/Input:
[7, 3, 5, 10, 1]

## Asistente
def sort_ascending(lst):
    for i in range(len(lst)):
        for j in range(i+1, len(lst)):
            if lst[i] > lst[j]:
                lst[i], lst[j] = lst[j], lst[i]
    return lst

sort_ascending([7, 3, 5, 10, 1])  # returns [1, 3, 5, 7, 10]
