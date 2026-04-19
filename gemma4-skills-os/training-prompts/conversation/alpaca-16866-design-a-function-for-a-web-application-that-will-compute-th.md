---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[16866]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design a function for a web-application that will compute the total cost for a given number of items.

Contexto/Input:
Items: [{name: "Chair", quantity: 4, price: 20}, {name: "Table", quantity: 1, price: 100}, {name: "Lamp", quantity: 2, price: 45}]

## Asistente
def calculateTotalCost(items):
    total_cost = 0
    for item in items:
        total_cost += item['quantity'] * item['price']
    return total_cost
