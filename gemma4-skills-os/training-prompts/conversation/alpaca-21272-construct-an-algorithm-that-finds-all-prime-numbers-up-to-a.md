---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[21272]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct an algorithm that finds all prime numbers up to a given upper limit.

Contexto/Input:
Upper limit = 20

## Asistente
Step 1: Set a counter equal to 2 (the first prime number).
Step 2: Check if the number is divisible by any other number between 2 and the counter (inclusively).
Step 3: If not, print out the number as it is a prime number.
Step 4: Increment the counter by 1 and go back to Step 2.
Step 5: When the counter reaches the upper limit (20), then stop the algorithm. Output: 2, 3, 5, 7, 11, 13, 17, 19.
