---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[19187]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a Python program to check if a given string is a palindrome or not.

## Asistente
def is_palindrome(string):
    # remove punctuation and whitespace
    cleaned_string = "".join(filter(str.isalnum, string)).lower() 
    # check if the string is the same in reverse
    return cleaned_string == cleaned_string[::-1]
