---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[31184]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to compute Fibonacci numbers

## Asistente
def Fibonacci(n):
    if n == 0:
        print(0)
    elif n == 1:
        print(1)
    else:
        num1 = 0
        num2 = 1
        for i in range(2,n+1):
            num3 = num1 + num2
            num1 = num2
            num2 = num3
        print(num3)
