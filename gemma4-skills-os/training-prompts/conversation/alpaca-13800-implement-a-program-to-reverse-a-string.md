---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[13800]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Implement a program to reverse a string.

## Asistente
def reverse_string(s):
    """
    Function to reverse a string
    Arguments:
        s: string to be reversed
    Returns:
        string which is the reverse of given input
    """
    reversed_string = ""
    for char in s: 
        reversed_string = char + reversed_string
    
    return reversed_string

sample_string = "Hello World!"
print(reverse_string(sample_string)) # "!dlroW olleH"
