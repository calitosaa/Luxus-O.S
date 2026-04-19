---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[2794]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a code to detect duplicates in an array.

Contexto/Input:
[3, 2, 1, 2, 3, 4]

## Asistente
"""
# Find duplicate elements in a list

def find_duplicates(data):
    seen = set()
    duplicates = []

    for element in data:
        if element in seen:
            duplicates.append(element)
        else:
            seen.add(element)
    
    return duplicates

if __name__ == "__main__":
    arr = [3, 2, 1, 2, 3, 4]
    duplicates = find_duplicates(arr)
    print(duplicates)
"""
