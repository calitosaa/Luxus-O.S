---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[7764]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a short program to print out the Fibonacci sequence up to the number specified by the user.

## Asistente
def print_fibonacci(n): 
    a = 0
    b = 1
 
     print("Fibonacci Sequence:")
    while a < n:
        print(a)
        c = a + b
        a = b
        b = c

n = int(input("Enter a number:"))
print_fibonacci(n)
