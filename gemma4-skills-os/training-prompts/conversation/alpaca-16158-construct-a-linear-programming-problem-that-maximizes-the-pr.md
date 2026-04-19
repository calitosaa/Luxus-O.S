---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[16158]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a linear programming problem that maximizes the profit from selling a certain product.

## Asistente
Given a production line with limited resources and a cost for each ingredient, the objective of the linear programming problem is to maximize profit from selling the product by finding the optimal combination of ingredients. The problem is formulated as follows: 

Maximize Profit = (Price of Product - Cost of Ingredient 1 - Cost of Ingredient 2 - ... - Cost of Ingredient n)
Subject to: 
- Ingredient 1 quantity <= Maximum Available Quantity 
- Ingredient 2 quantity <= Maximum Available Quantity 
- ... 
- Ingredient n quantity <= Maximum Available Quantity
