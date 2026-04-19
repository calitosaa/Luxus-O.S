---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[20515]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function, "factorial_of()," that takes in an integer and returns its factorial.

## Asistente
def factorial_of(n):
    """This function takes in a integer 'n' and returns its factorial.
    
    Args: 
        n (int): The number to calculate the factorial of
      
    Returns: 
        int: The calculated factorial of 'n'
    """
    if n == 0:
        return 1
    else:
        return n * factorial_of(n-1)
