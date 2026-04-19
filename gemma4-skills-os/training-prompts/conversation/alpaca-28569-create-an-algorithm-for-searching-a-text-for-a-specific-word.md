---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28569]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm for searching a text for a specific word.

## Asistente
The algorithm should begin by splitting the text into an array of strings based on the characters such as spaces, tabs, and punctuation. The algorithm should then iterate through the array, comparing each string to the searched-for word. If the strings match, the position of the word should be saved in a list and returned when the algorithm terminates. The algorithm should be case-insensitive, so comparisons should ignore case when determining if the strings match.
