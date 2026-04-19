---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[23706]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function that takes two strings and checks if they are an anagram of each other.

## Asistente
def is_anagram(str1, str2):
    char_map1 = {}
    for char in str1:
        if char in char_map1:
            char_map1[char] += 1
        else:
            char_map1[char] = 1

    char_map2 = {}
    for char in str2:
        if char in char_map2:
            char_map2[char] += 1
        else:
            char_map2[char] = 1

    if char_map1 != char_map2:
        return False
    else:
        return True
