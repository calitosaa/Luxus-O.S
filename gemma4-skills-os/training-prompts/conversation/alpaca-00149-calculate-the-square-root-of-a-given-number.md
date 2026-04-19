---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[149]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Calculate the square root of a given number.

## Asistente
def sqrt(n):
    low = 0
    high = n
    
    while low <= high:
        mid = (low + high) // 2
        if mid * mid == n:
            return mid
        elif mid * mid < n:
            low = mid + 1
        else:
            high = mid - 1
            
    return low - 1
