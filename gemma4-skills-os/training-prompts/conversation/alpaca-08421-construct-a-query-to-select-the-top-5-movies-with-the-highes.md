---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[8421]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a query to select the top 5 movies with the highest rating on the website

## Asistente
SELECT movie_title, rating 
FROM movies
ORDER BY rating DESC
LIMIT 5;
