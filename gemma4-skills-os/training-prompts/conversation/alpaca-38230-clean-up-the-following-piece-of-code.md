---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[38230]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Clean up the following piece of code.

Contexto/Input:
def count_vowel(str):
  vowels=['a','e','i','o','u']
  cnt=0
  for alph in str:
    if alph in vowels:
        cnt+=1
return cnt

## Asistente
def count_vowels(string):
  vowels = ['a', 'e', 'i', 'o', 'u']
  count = 0
  for letter in string:
    if letter in vowels:
      count += 1
  return count
