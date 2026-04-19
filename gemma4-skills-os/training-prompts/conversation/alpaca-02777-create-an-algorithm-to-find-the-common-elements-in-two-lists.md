---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[2777]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm to find the common elements in two lists.

Contexto/Input:
list1 = [1,2,3,4,5]
list2 = [2,4,5,6,7]

## Asistente
"""
Find the common elements in two lists
"""

def findCommonElements(list1, list2):
    # initialize a list to store the common elements
    common_elements = []

    # loop through list1 to find common elements in both lists
    for i in list1:
        if i in list2:
            common_elements.append(i)
    
    return common_elements

if __name__ == '__main__':
    list1 = [1,2,3,4,5]
    list2 = [2,4,5,6,7]
    print(findCommonElements(list1, list2))
