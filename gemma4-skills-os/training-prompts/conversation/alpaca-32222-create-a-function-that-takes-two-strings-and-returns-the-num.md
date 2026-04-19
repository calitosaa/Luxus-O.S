---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[32222]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function that takes two strings and returns the number of common characters between them.

Contexto/Input:
String 1 = 'Hello world!'
String 2 = 'Good bye!'

## Asistente
def common_chars(str1,str2):
    common_count = 0
    
    # Create a dictionary of characters counting 
    # the number of occurrences in both strings
    str1_dict = {}
    for char in str1:
        if char in str1_dict:
            str1_dict[char] += 1
        else:
            str1_dict[char] = 1
    
    # Do the same for str2 
    str2_dict = {}
    for char in str2:
        if char in str2_dict:
            str2_dict[char] += 1
        else:
            str2_dict[char] = 1
    
    # Check for common characters
    for char in str1_dict:
        if char in str2_dict:
            common_count += 1
    
    return common_count
