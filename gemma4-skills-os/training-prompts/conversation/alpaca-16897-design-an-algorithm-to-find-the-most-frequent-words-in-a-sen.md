---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[16897]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design an algorithm to find the most frequent words in a sentence.

## Asistente
The algorithm should first tokenize the sentence given into individual words. After splitting the sentence, the algorithm can then use a frequency counter to keep track of how many times each word occurs. Once the counter has been created, the algorithm can then sort the counter array by the highest frequency word, and return the most frequently used word.

def most_frequent_words(sentence):
    words = sentence.split()
    word_freqs = {}
    
    # Create a counter to keep track of word frequency
    for word in words:
        if word in word_freqs:
            word_freqs[word] += 1
        else:
            word_freqs[word] = 1
    
    # Sort the counter array and return the most frequent words
    sorted_words = sorted(word_freqs.items(), key=lambda t: t[1], reverse=True)
    return sorted_words[0][0]
