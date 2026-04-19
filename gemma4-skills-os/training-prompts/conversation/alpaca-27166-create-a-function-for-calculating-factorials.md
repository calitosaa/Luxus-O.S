---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[27166]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function for calculating factorials.

## Asistente
def calculateFactorial(n: int) -> int: 
    '''Returns the factorial of n (n!)

    Parameters:
        n (int): the number to calculate the factorial for.

    Returns:
        int: the factorial of n (n!)
    '''
    # base case: 0! = 1
    if n == 0: 
        return 1
    # recursive case: n! = n * (n - 1)!
    else: 
        return n * calculateFactorial(n-1)
