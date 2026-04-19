---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[43196]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a query in java to sort an array of numbers in descending order.

Contexto/Input:
Integer array: {3, 7, 1, 4, 8}

## Asistente
Arrays.sort(arr, Collections.reverseOrder());
