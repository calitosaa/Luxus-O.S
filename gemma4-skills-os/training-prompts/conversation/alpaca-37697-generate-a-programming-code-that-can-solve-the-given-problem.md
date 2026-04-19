---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[37697]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a programming code that can solve the given problem.

Contexto/Input:
Calculate the average of two numbers.

## Asistente
def calculateAverage(num1, num2):
  return (num1 + num2) / 2

# Testing
number1 = 8
number2 = 6

# Run the function
print(calculateAverage(number1, number2)) # Output: 7.0
