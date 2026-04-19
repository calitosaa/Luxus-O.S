---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[11084]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm for finding the difference between two large numbers.

Contexto/Input:
325678 and 835716

## Asistente
The algorithm for finding the difference between two large numbers is as follows:

1. Convert the numbers to the same base if they are in different bases.
2. Compare the lengths of the numbers.
3. Pad the smaller number with zeroes by adding zeroes to the left of the number until the lengths are equal.
4. Subtract the smaller number from the larger number, beginning with the rightmost digits of each number.
5. Work to the left, subtracting one digit at a time, and carry over the number if necessary.
6. The resulting number is the difference between the two numbers.

In the example provided, the difference is 509,038.
