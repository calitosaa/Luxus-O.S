---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[4920]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function in Python to compare two strings.

Contexto/Input:
The two strings are 'apple' and 'orange'.

## Asistente
def compare_strings(s1, s2):
  # Compare two strings and return a boolean value
  if s1 == s2:
    return True
  else:
    return False

# Test case
string1 = 'apple'
string2 = 'orange'

result = compare_strings(string1, string2)
print(result)
