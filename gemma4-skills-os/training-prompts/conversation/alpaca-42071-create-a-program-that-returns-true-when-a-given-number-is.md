---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[42071]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program that returns 'true' when a given number is a prime number.

## Asistente
"""
Create a program that returns 'true' when a given number is a prime number.
"""
def is_prime(num):
    # Edge case 
    if num == 1:
        return False
    # Check from 2 to n-1 
    for i in range(2, num):
        if (num % i) == 0:
            return False
    return True
    
if __name__ == '__main__':
    num = int(input())
    print(is_prime(num))
