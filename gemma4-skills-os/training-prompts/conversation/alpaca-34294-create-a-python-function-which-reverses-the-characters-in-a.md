---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[34294]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a Python function which reverses the characters in a string.

Contexto/Input:
String = "Hello World"

## Asistente
def reverse(string): 
  str = "" 
  for i in string: 
    str = i + str
  return str
  
print(reverse("Hello World"))

# Output: dlroW olleH
