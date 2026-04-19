---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[21464]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to find the highest number in the given list of integers.

Contexto/Input:
[8, 3, 5, 9, 1]

## Asistente
def findMax(myList):
    maxNum = myList[0]
    for num in myList:
        if num > maxNum:
            maxNum = num
    return maxNum

print(findMax([8, 3, 5, 9, 1])) # Output: 9
