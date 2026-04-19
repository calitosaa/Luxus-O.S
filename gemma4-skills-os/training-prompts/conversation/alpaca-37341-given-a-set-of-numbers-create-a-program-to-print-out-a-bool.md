---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[37341]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given a set of numbers, create a program to print out a boolean value (True/False) to tell if one of the numbers is a perfect square.

Contexto/Input:
nums = [2, 3, 4, 6, 7]

## Asistente
# Program to check if one of the numbers is a perfect square

nums = [2, 3, 4, 6, 7]

# Boolean variable to store the result
result = False

# Go through the list and check if one of the numbers is a perfect square
for num in nums:
  if (num ** 0.5) % 1 == 0:
    result = True
    break

print(result) # Prints True
