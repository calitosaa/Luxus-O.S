---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[2798]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given an array of numbers, write a program to find the median value.

Contexto/Input:
[10, 20, 30, 40]

## Asistente
"""
# Calculate the median of a array

def find_median(data):
    data.sort()
    n = len(data)

    if n % 2 == 0:  
        median = (data[n//2] + data[n//2-1])/2
    else: 
        median = data[n//2] 
    
    return median

if __name__ == "__main__":
    data = [10, 20, 30, 40]
    median = find_median(data)
    print("The median is:", median)
"""
