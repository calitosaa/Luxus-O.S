---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[33670]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm for finding the highest peak in the world

## Asistente
1. Start with an initial list of potential peaks.
2. Measure the height of each peak to determine the highest peak in the list. Return that peak if its height is greater than all other peaks in the list.
3. If there are multiple peaks of the same height, select a subset of those peaks and repeat Step 2.
4. If the highest peak in the subset is not the highest of all peaks in the initial list, add additional peaks to the list and repeat Step 2.
5. Repeat Steps 2-4 until the highest peak in the list is the highest of all peaks in the initial list. Return that peak.
