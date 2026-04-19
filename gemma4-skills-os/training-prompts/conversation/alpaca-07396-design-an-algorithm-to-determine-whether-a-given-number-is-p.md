---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[7396]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design an algorithm to determine whether a given number is prime.

## Asistente
We can use the following algorithm to determine whether a given number, n, is prime or not:
1. Set a counter, i, to 2.
2. Check if n is evenly divisible by i. If n is evenly divisible by i, n is not a prime number. If n is not evenly divisible by i, increment i by 1 and go back to Step 2.
3. If i is greater than or equal to the square root of n, then n is a prime number.
