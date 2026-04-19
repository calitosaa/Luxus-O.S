---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18656]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given a list of instructions, write a function using a programming language

Contexto/Input:
Find the largest number 
Find the smallest number
Compare the two numbers

## Asistente
def find_largest_and_smallest_numbers(numbers):
    largest_number = 0
    smallest_number = numbers[0]
    for number in numbers:
        if number > largest_number:
            largest_number = number
        elif number < smallest_number:
            smallest_number = number
    return largest_number, smallest_number
