---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[29733]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function which can compress a string of text.

Contexto/Input:
String of text: "This is a random string. It has no purpose other than to test this function."

## Asistente
def compress_string(string):
    """Compresses a string of text by replacing repeated characters with a single character and a count"""
    
    compressed_string = ""
    current_char = string[0]
    count = 1
    for char in string[1:]:
        if char == current_char: # If the character is a repeat
            count += 1
        else: # If the character is not a repeat
            compressed_string += current_char + str(count)
            current_char = char
            count = 1
    # Add the last set of repeated characters
    compressed_string += current_char + str(count)
    return compressed_string

compress_string("This is a random string. It has no purpose other than to test this function.")
"T1h1i1s1 1i1s1 1a1 1r1a1n1d1o1m1 1s1t1r1i1n1g1.1 1I1t1 1h1a1s1 1n1o1 1p1u1r1p1o1s1e1 1o1t1h1e1r1 1t1h1a1n1 1t1o1 1t1e1s1t1 1t1h1s1 1f1u1n1c1t1i1o1n1.1"
