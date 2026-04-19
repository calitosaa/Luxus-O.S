---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[24172]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design a program that calculates the average of five numbers

## Asistente
"""
Calculate the average of five numbers
"""

def calculate_average(numbers):
    average = sum(numbers) / len(numbers)
    return average

if __name__ == '__main__':
    numbers = [3, 6, 9, 12, 15]
    average = calculate_average(numbers)
    print(f'The average of {numbers} is {average}.')
