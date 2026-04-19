---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[20116]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a program that can find the longest pallindrome in a given string

Contexto/Input:
String = "ababad"

## Asistente
def longestPallindrome(string):
 
    #Check if string is empty
    if (len(string) == 0):
        return ""
 
    #Define a data structure and store the length of the longest pallindrome
    pallindromes = [[0 for x in range(len(string))] for y in range(len(string))]
    max_length = 0
    start_pos = 0
    #Calculate the longest pallindrome
    for i in range(len(string)):
        pallindromes[i][i] = 1
        for j in range(i):
            if (string[j] == string[i] and (pallindromes[j+1][i-1] or i-j == 1)):
                pallindromes[j][i] = 1
                if (max_length < i - j + 1):
                    max_length = i-j + 1
                    start_pos = j
 
    return string[start_pos:start_pos+max_length]
