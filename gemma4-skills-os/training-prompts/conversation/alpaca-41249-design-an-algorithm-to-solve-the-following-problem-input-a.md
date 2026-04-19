---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[41249]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design an algorithm to solve the following problem.
Input: A string and an integer k Output: A string

Contexto/Input:
Input: "abcdefg", 3

## Asistente
defgabc

def scramble(string, k):
    length = len(string)
    newString = ""
    
    for i in range(length):
        newString += string[(i + k) % length]
    
    return newString
