---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[41731]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm to find the greatest common divisor for two positive integers.

## Asistente
"""
Create an algorithm to find the greatest common divisor for two positive integers.
"""

def gcd(a, b): 
    # Base case 
    if a == 0: 
        return b 
          
    return gcd(b%a, a) 


# Driver program to test above function 
a, b = 20, 8
gcd(a, b) # prints 4
