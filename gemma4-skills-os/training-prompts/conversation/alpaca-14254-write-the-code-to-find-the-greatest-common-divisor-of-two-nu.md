---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[14254]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write the code to find the greatest common divisor of two numbers.

Contexto/Input:
a = 8, b = 27

## Asistente
def gcd(a, b): 
    if a == 0 : 
        return b 
    return gcd(b % a, a) 

# prints 3 
print("GCD is", gcd(8, 27))
