---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[23305]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a correct python program to shift all the letters in a given word by two characters ahead.

Contexto/Input:
Input word: apple

## Asistente
def shift_word(word):
        shifted_letter = ""
        for letter in word:
            letter_idx = ord(letter) + 2
            if letter_idx > ord('z'):
                letter_idx -= 26
            shifted_letter += chr(letter_idx)
        return shifted_letter

print(shift_word('apple'))
