---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[25336]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm that finds the greatest common divisor (GCD) for two numbers.

Contexto/Input:
284, 252

## Asistente
The GCD algorithm can be used to find the greatest common divisor between two numbers.

The GCD algorithm works by taking two non-zero integers and repeatedly dividing out their largest common divisor until no common divisor is found.
1. Initialize two positive integers n1,n2 such that n1 > n2
2. Divide n1 by n2 and obtain the remainder.
3. If the reminder is 0, then GCD (n1, n2) = (n2).
4. If the remainder is not 0, set n1 = n2 and n2 = reminder.
5. Repeat until the reminder is 0.

With our integers 284, 252:
n1 = 284 and n2 = 252
284 % 252 = 32  (remainder)
n1 = 252 and n2 = 32
252 % 32 = 0  (remainder)
GCD (284, 252) = 32
