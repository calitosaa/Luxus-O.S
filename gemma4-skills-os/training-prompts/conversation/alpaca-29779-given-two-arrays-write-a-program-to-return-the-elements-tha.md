---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[29779]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given two arrays, write a program to return the elements that are present in both the arrays.

Contexto/Input:
Array 1 = [1, 2, 3, 4, 5]
Array 2 = [3, 4, 5, 6, 7]

## Asistente
def find_common_elements(arr1, arr2):
    res = []
    for i in arr1:
        if i in arr2:
            res.append(i)
    return res
