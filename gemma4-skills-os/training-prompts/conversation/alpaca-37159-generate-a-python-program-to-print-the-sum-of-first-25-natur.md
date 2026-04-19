---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[37159]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a Python program to print the sum of first 25 natural numbers

## Asistente
sum = 0
for i in range(1,26):
  sum = sum + i

print("The sum of the first 25 natural numbers is:", sum)
