---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[42310]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a Python program that asks the user for their age and prints out an appropriate response.

## Asistente
age = int(input('What is your age? '))

if age < 18:
  print('You are too young to participate in this activity.')
elif age < 25:
  print('Welcome! Enjoy your experience!')
else:
  print('Thank you for your participation. Have a nice day!')
