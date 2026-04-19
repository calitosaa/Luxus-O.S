---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[23277]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a classifier that accurately predicts whether a given house is expensive or not based on input features.

Contexto/Input:
number of bedrooms | number of bathrooms | square footage
3 | 2 | 2,000
3 | 2 | 4,000
4 | 3 | 2,500
4 | 4 | 5,500

## Asistente
Expensive (1)	|	Not Expensive (0) 
0 | 1
0 | 1
0 | 0
1 | 1
