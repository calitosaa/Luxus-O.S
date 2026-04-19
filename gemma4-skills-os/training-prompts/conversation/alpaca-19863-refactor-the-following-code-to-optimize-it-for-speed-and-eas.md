---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[19863]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Refactor the following code to optimize it for speed and ease of use.

Contexto/Input:
def check_prime(num):
    for n in range(2, num):
        if num % n == 0:
            return False
    return True

## Asistente
def check_prime(num):
    if num < 2:
        return False

    # check only odd numbers
    if num % 2 == 0:
        return False
    
    for n in range(3, int(num**0.5)+1, 2):
        if num % n == 0:
            return False
    return True
