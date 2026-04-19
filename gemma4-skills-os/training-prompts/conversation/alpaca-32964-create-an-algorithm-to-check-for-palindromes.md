---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[32964]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm to check for palindromes.

## Asistente
def check_palindrome(word):
  # Reverse the word
  reversed_word = word[::-1]
  
  # Check if the original word matches the reversed word
  return word == reversed_word
  
# Test the function
print(check_palindrome("abba"))  # True
print(check_palindrome("redrum"))  # False
