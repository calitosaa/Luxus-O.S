---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[33944]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write code to sort a list of integers in descending order.

Contexto/Input:
[7, 9, 5, 4, 6]

## Asistente
def descending_sort(list): 
    # using bubble sort 
    n = len(list) 
    for i in range(n): 
        for j in range(0, n-i-1): 
            if list[j] < list[j+1] : 
                list[j], list[j+1] = list[j+1], list[j] 

list = [7, 9, 5, 4, 6]
descending_sort(list) 
print(list)
