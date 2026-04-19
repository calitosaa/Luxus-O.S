---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[9598]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Build an algorithm that will find all prime numbers between 2 and 100.

## Asistente
def is_prime(n): 
    if n == 2: 
        return True
    if n < 2 or n % 2 == 0: 
        return False
    # Check if a number is divisible by other numbers
    i = 3
    while i * i <= n: 
        if n % i == 0: 
            return False
        i += 2
    return True

# Print all prime numbers between 2 and 100
print("Prime numbers between 2 and 100:")
for i in range(2, 101): 
    if is_prime(i): 
        print(i)
