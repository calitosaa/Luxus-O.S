---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18233]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Code a program to output a given string in upper case

Contexto/Input:
String: Hello World

## Asistente
# Taking the user input 
user_string = input("Please enter a string: ")

# Printing the input in uppercase
print(user_string.upper())  # Output: HELLO WORLD
