---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40691]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program to calculate the frequency of a word in a sentence.

Contexto/Input:
The sentence is: "This is an example sentence" 
The word is: "is"

## Asistente
"""
Create a program to calculate the frequency of a word in a sentence.

def calculate_word_frequency(sentence, word):
    words = sentence.split()
    word_count = words.count(word)
    return word_count

if __name__ == "__main__":
    sentence = "This is an example sentence" 
    word = "is"
    word_count = calculate_word_frequency(sentence, word)
    print("The frequency of the word '" + word + "' in the sentence is", word_count)
"""
