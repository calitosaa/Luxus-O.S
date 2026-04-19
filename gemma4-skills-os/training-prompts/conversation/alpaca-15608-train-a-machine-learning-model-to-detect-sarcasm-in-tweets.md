---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[15608]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Train a machine learning model to detect sarcasm in tweets.

Contexto/Input:
This is a collection of tweets from a Twitter handle @sarcastic_tweets.

Tweet_1: What a beautiful day!
Tweet_2: So glad I have to work on a Saturday
Tweet_3: My cat is so cute when he sleeps

## Asistente
Model is trained to assign a score between 0 and 1 to each tweet, indicating the probability for the tweet being sarcastic. If the probability is above a certain threshold, then the model classifies the tweet as sarcastic.
The model classifies Tweet_2 as sarcastic with a probability of 0.9 and the other two tweets as not sarcastic with a probability of 0.1.
