---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[17621]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a query to find the top 10 most populous countries in the world.

## Asistente
SELECT * FROM countries ORDER BY population DESC LIMIT 10;

This query will select all the columns from the table of countries and will order the results by population in descending order. The LIMIT statement at the end will limit the results to the top 10 most populous countries in the world.
