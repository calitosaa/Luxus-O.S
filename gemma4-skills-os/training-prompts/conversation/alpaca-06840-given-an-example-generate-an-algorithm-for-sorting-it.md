---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[6840]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given an example, generate an algorithm for sorting it.

Contexto/Input:
[3, 9, 5, 4, 7]

## Asistente
1. Set a variable i to 0.
2. Set a variable j to (i + 1).
3. If the item at index i is less than the item at index j, swap the two items.
4. Increase i by 1, and set j to (i + 1).
5. Repeat steps 3 and 4 until all items in the list have been compared and swapped if necessary.
6. Repeat the whole process until no more swaps are necessary.
