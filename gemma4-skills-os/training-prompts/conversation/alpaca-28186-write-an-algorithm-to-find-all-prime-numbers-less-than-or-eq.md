---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28186]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm to find all prime numbers less than or equal to a given integer n.

## Asistente
An algorithm for finding all prime numbers up to a given integer n can be written as follows: 

1. Create an empty array to hold all the prime numbers found. 
2. Iterate from 2 to n, and for each number check if it is prime. 
3. To check for primality, divide the number by every integer up to its square root. 
4. If no divisors are found, add the number to the array of primes. 
5. After the iteration is complete, return the array of primes.
