---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[41706]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a computer program to output the Fibonacci sequence up to nth number.

Contexto/Input:
n = 10

## Asistente
def fibonacciSequence(n): 
    
    a = 0
    b = 1
    output = [a, b]

    for _ in range(2, n):
        c = a + b
        a = b
        b = c
        output.append(c)

    return output

print(fibonacciSequence(10))  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
