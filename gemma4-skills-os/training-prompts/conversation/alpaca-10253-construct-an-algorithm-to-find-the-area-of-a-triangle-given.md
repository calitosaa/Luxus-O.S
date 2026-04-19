---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[10253]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct an algorithm to find the area of a triangle given its three side lengths.

## Asistente
1. Define three variables to represent the three side lengths of the triangle.
2. Calculate the semiperimeter of the triangle (s) by adding the three side lengths and dividing by two.
3. Calculate the area of the triangle (A) using Heron's Formula: A = √(s*(s-a)*(s-b)*(s-c)), where a, b, and c are the side lengths.
4. Return the value of A.
