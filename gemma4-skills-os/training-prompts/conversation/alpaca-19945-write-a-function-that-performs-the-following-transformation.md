---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[19945]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function that performs the following transformation.

Contexto/Input:
Transform all the vowels to uppercase

## Asistente
def transform_vowels(input_string):
    output_string = ''
    vowels = ['a', 'e', 'i', 'o', 'u']
    for char in input_string:
        if char in vowels:
           output_string += char.upper()
        else:
           output_string += char
    return output_string
