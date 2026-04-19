---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[38362]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a Python program to print all the prime numbers between 0 and 100.

## Asistente
"""
Write a Python program to print all the prime numbers between 0 and 100.
"""

# Store prime numbers
primes = []

# Generate a list of numbers between 0 and 100
numbers = list(range(0,101))

# Iterate through the numbers
for number in numbers:
    # Ignore 1
    if number == 1:
        continue
    # Set initial prime flag
    prime_flag = True
    # Iterate through numbers from 2 to current number
    for div in range(2, number):
        # If a divisor is found, set flag to false
        if number % div == 0:
            prime_flag = False
            break
    # If flag is still true, append number to primes list
    if prime_flag:
        primes.append(number)

# Print the list of primes
print(primes)
