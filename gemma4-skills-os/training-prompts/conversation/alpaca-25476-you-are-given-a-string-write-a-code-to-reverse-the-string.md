---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[25476]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
You are given a string, write a code to reverse the string.

Contexto/Input:
String = "Programming"

## Asistente
"""
Code to reverse a given string
"""

def reverse_string(string): 
    reversed_string = string[::-1] 
    print (reversed_string) 
    
if __name__ == '__main__': 
    reverse_string("Programming")
