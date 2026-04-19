---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18048]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Using Python, create a program that can predict the language of a given text.

Contexto/Input:
This is a sentence in French

## Asistente
import nltk
from nltk import word_tokenize

#Split the text into words
words = word_tokenize(text)

#Initialize the stopwords list
stopwords = nltk.corpus.stopwords.words("french")

#Iterate over each word and determine if it is a French word
n_french = 0
for word in words:
    if word.lower() in stopwords:
        n_french += 1

#Calculate the percentage of French words to total words
total = len(words)
french_percentage = n_french/total

#If French vocabulary is greater than 50%, we can predict that the text is French
if french_percentage > 0.5:
    print("The text is French")
else:
    print("The text is not French")
