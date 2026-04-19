---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[1375]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Code a function to determine if two strings are anagrams of each other.

## Asistente
def isAnagram(string1, string2): 
  
    # Make sure both strings are of the same length 
    if len(string1) != len(string2): 
        return False
  
    # Dictionary to store frequency of characters in string1 
    count = [0] * 26
  
    # For each character in string1 increment its frequency 
    for i in range(len(string1)): 
        count[ord(string1[i]) - ord('a')] += 1
  
    # For each character in string2 decrement its frequency 
    for i in range(len(string2)): 
        count[ord(string2[i]) - ord('a')] -= 1
  
    # If any frequency reaches a negative value, 
    # then strings can't be anagrams 
    for i in range(len(count)): 
        if count[i] < 0: 
            return False
  
    # If all frequencies are zero, string1 and string2 
    # are anagrams of each other 
    return True
