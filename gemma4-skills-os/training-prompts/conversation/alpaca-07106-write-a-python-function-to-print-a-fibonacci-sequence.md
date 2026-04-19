---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[7106]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a Python function to print a Fibonacci sequence.

## Asistente
def printFibonacci(n): 
    a = 0
    b = 1
    if n < 0: 
        print("Incorrect input") 
    elif n == 0: 
        print(a) 
    elif n == 1: 
        print(b) 
    else: 
        print(a)
        print(b)
        for i in range(2,n): 
            c = a + b 
            a = b 
            b = c 
            print(b)
