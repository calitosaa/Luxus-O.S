---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28576]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a function that determines the number of days in a given month using the month name and date.

## Asistente
The function should take two string arguments, the month name and date. It should then check if the date is valid, and depending on the month, return an integer corresponding to the number of days in that month. If the month is February, it should also take leap year into consideration. For example, if the inputs are "February" and "29", the function should return 29 if the year is a leap year, and 28 otherwise.
