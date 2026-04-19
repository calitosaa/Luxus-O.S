---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[17612]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate an API endpoint that returns a list of items

## Asistente
The API endpoint should take a few parameters such as the type of items, a range, and any filters. It should then construct a query based on the parameters and execute this query on the database to return a list of items satisfying the parameters. The API should also provide pagination to allow for easy navigation of large datasets.
