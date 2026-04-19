---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[8638]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given an input string and a dictionary, create a function find longest word in dictionary that is a subsequence of the given string.

Contexto/Input:
Input string: abpppl
Dictionary: [able, apple, sample, abppl, pl]

## Asistente
def findLongestWord(string, dict): 
    maxLen = 0
    result = "" 

    for word in dict: 
        if isSubsequence(word, string): 
            if len(word) > maxLen: 
                maxLen = len(word) 
                result = word  
  
    return result
