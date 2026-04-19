---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18701]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to calculate the total cost of a shopping basket

Contexto/Input:
Items: 
- Apples (x2): 4.50 
- Eggs (x6): 2.00 
- Milk (x1): 1.00

## Asistente
def calculate_total(basket):
    total = 0
    # Iterate over the items and add their cost to the total 
    for item in basket:
        total += item[1]
    return total
