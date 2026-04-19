---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[15820]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given some data, train a sentiment analysis model to predict sentiment.

Contexto/Input:
The following tweets about a new movie:
1. "I just saw the new movie and it's the best thing I've ever seen!"
2. "The new movie was terrible - it was the worst movie I've ever seen."
3. "Meh, it was okay. I wouldn't say it was great or terrible."

## Asistente
The sentiment analysis model should be able to classify the sentiment of each tweet as either positive, negative or neutral.  Additionally, the model should be able to detect the sentiment of a new tweet about the same movie by looking at the sentiment of similar words in previously classified tweets.
