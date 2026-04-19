---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[24173]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design a program that returns a string of the first 100 Fibonacci numbers

## Asistente
"""
Return a string of the first 100 Fibonacci numbers
"""

def fibonacci_sequence(limit):
    fibonacci = [1, 1]
    i = 2
    while i < limit:
        fibonacci.append(fibonacci[i - 1] + fibonacci[i - 2])
        i += 1
    return ' '.join(map(str, fibonacci))

if __name__ == '__main__':
    print(fibonacci_sequence(100))
