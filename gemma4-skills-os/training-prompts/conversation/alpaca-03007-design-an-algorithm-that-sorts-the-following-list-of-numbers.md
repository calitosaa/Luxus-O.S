---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[3007]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design an algorithm that sorts the following list of numbers in ascending order.

Contexto/Input:
[5, 2, 6, 1, 9]

## Asistente
def bubbleSort(list): 
    n = len(list) 

    for i in range(n): 
   
        for j in range(0, n-i-1): 
           
            if list[j] > list[j+1] : 
                list[j], list[j+1] = list[j+1], list[j] 
  
bubbleSort(list)
