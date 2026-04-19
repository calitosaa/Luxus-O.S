---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40559]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Provide a computer code snippet to sort an array.

Contexto/Input:
[2, 6, 3, 7, 1, 4]

## Asistente
let array = [2, 6, 3, 7, 1, 4];
array.sort((a,b) => (a - b)); // [1, 2, 3, 4, 6, 7]
