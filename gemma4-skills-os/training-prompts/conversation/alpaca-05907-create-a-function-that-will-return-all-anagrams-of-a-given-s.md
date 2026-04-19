---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5907]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function that will return all anagrams of a given string.

## Asistente
def get_anagrams(str):
    """
    Function to return all anagrams of the given string
    
    Parameters:
    str: string to be anagrammed 
    
    Returns: 
    anagrams: a list of strings that are anagrams of the given string
    """
    if not str:
        return []
    
    anagrams = []
    letters = list(str)
    comb = itertools.permutations(letters, len(letters))
    
    for t in comb:
        anagram = ''.join(t)
        if anagram != str:
            anagrams.append(anagram)
    
    return anagrams
