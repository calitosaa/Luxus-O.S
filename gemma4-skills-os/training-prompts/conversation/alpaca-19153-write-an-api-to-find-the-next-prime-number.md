---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[19153]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an API to find the next prime number

## Asistente
def next_prime(n):
    '''
    Returns the next prime number after the number n
    Inputs:
        n (int): The number that the API should start from
    Outputs:
        The next prime number
    '''
    num = n + 1
    while True:
        for i in range(2, num):
            if num % i == 0:
                num += 1
                break
        else:
            return num
