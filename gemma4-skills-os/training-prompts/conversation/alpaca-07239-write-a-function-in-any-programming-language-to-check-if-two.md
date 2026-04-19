---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[7239]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function in any programming language to check if two words are anagrams of each other.

## Asistente
Python code

def isAnagram(x, y): 
  
    # Get lengths of both strings 
    x_len = len(x) 
    y_len = len(y)
  
    # If length of both strings is not same, then they  
    # are not anagram 
    if x_len != y_len: 
        return False
  
    x = sorted(x) 
    y = sorted(y) 
  
    for i in range(0, x_len):
        char1 = x[i] 
        char2 = y[i]
  
    # Compare sorted strings 
    if char1 != char2: 
        return False
  
    return True
