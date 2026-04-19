---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[23344]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design an algorithm to find the longest word in a string.

## Asistente
def longest_word(string): 
    # Split the string into a list of words
    words = string.split() 
  
    # Initialize the maximum length
    max_length = 0
  
    # Traverse the list of words
    for word in words: 
        # Calculate the length of each word
        word_length = len(word)
   
        # Keep track of the maximum length
        if(word_length > max_length): 
            max_length = word_length 
  
    # Return the maximum length of words 
    return max_length

# Driver's code 
input_string = 'this is a string containing words'
print(longest_word(input_string)) # Output: containing (Longest word of the given string)
