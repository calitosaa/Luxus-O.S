---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[19362]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm for finding prime numbers between 1 and 100

## Asistente
1. Create a list of numbers from 1 to 100
2. Set "p" equal to 2, the first prime number
3. Starting from p, count up in increments of p and mark each of these numbers greater than p itself in the list
4. Find the first number greater than p in the list that is not marked
5. If there is no such number, stop; otherwise, let p now equal this new number and repeat from step 3.
