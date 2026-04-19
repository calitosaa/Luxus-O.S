---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[31396]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design an efficient algorithm for reversing an array

Contexto/Input:
[3, 5, 6, 9, 12]

## Asistente
def reverse_array(array):
    left = 0
    right = len(array) - 1

    while left < right:
        temp = array[left]
        array[left] = array[right]
        array[right] = temp

        left += 1
        right -= 1
        
    return array
