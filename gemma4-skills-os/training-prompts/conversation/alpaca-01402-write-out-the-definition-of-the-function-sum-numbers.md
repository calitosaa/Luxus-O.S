---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[1402]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write out the definition of the function 'sum_numbers'

Contexto/Input:
<no input>

## Asistente
def sum_numbers(x, y):
    """
    Returns the sum of two numbers.
    
    Parameters
    ----------
    x : int
        The first number
    y : int
        The second number

    Returns
    -------
    int
        The sum of the two numbers
    """
    return x + y
