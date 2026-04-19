---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[22587]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function which randomly shuffles the elements of an array.

## Asistente
def shuffle_list(list):
    """
    This function randomly shuffles the elements of a list.
    """
    import random
    n = len(list)
    for i in range(n-1, 0, -1): 
        j = random.randint(0, i+1)  
        list[i], list[j] = list[j], list[i] 
    return list
