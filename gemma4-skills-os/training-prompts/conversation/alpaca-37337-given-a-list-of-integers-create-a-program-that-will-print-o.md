---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[37337]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given a list of integers, create a program that will print out the sum of the values of the list.

Contexto/Input:
[4, 8, 10, 15]

## Asistente
# Program to calculate sum of list

list_of_numbers = [4, 8, 10, 15]

sum = 0

for num in list_of_numbers:
    sum += num

print("Sum of list:", sum) # Prints 37
