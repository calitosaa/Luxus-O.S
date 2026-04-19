---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[29511]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct an algorithm for calculating prime numbers.

## Asistente
A simple algorithm for calculating prime numbers is to generate a list of all the numbers from 2 to n (where n is some upperbound). Then, start from the first number in the list and check whether any of the other numbers are divisible by it (i.e. have no remainders). If not, the number is prime. Repeat for each number in the list, and any number for which no other number in the list is divisible is a prime number.
