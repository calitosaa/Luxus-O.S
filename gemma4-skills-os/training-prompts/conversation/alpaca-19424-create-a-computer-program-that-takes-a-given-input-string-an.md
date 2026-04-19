---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[19424]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a computer program that takes a given input string and produces a new output by rearranging the letters in the original string.

Contexto/Input:
Input string: Hello

## Asistente
def scramble(word):
  output = ""
  while len(word) > 0:
    index = random.randint(0,len(word)-1)
    output += word[index]
    word = word[:index] + word[index+1:] 
  return output

scramble("Hello")  # Output: lleHo (or some other random rearrangement)
