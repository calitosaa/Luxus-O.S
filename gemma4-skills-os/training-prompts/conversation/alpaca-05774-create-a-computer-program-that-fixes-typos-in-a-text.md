---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5774]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a computer program that fixes typos in a text.

## Asistente
def fixTypos(text): 
    words = text.split()
    for i in range(len(words)):
        words[i] = spellCheck(words[i])
    return ' '.join(words)
  
def spellCheck(word):
    dictionary = ["Hello", "Goodbye", "World"]
    minDistance = len(word)
    result = word
    for item in dictionary:
        if distance(word, item) < minDistance:
            minDistance = distance(word, item)
            result = item
    return result
    
def distance(a, b):
    len_a = len(a)
    len_b = len(b)
    if len_a > len_b: 
        a, b = b, a
        len_a, len_b = len_b, len_a
  
    current_row = range(len_a + 1) 
    for i in range(1, len_b + 1): 
        previous_row, current_row = current_row, [i] + [0] * len_a 
        for j in range(1, len_a + 1): 
            add, delete, change = previous_row[j] + 1, current_row[j - 1] + 1, previous_row[j - 1] 
            if a[j - 1] != b[i - 1]: 
                change += 1
            current_row[j] = min(add, delete, change) 
      
    return current_row[len_a]
