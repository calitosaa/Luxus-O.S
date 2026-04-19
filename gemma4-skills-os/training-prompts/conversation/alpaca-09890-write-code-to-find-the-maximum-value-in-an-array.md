---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[9890]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write code to find the maximum value in an array

Contexto/Input:
[2, 4, 5, 7, 1]

## Asistente
arr = [2, 4, 5, 7, 1] 

def findMax(arr): 
    max = arr[0] 
  
    for i in range(1, len(arr)): 
        if arr[i] > max: 
            max = arr[i] 
    return max 
  
print(findMax(arr))
