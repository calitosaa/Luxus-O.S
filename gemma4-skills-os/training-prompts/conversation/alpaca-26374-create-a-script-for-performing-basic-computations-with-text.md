---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[26374]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a script for performing basic computations with text data.

## Asistente
import string

# define a function to remove punctuation from a text data string
def rem_punct(text):
    no_punct = ""
    for char in text:
        if char not in string.punctuation:
            no_punct = no_punct + char
    return no_punct

# define a function for counting number of words in a text data string
def word_count(words):
    count = 0
    for word in words.split():
        count+=1
    return count

# define a function for calculating the average length of words
def avg_word_length(words):
    count = 0
    total_length = 0
    for word in words.split():
        total_length += len(word)
        count+=1
    return total_length/count
