---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[22304]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to determine the sum of all prime numbers up to a given limit.

## Asistente
def sum_primes(limit):
    sum = 0
    for number in range(2, limit + 1):
        if all(number % i != 0 for i in range(2, number)):
            sum += number
    return sum
