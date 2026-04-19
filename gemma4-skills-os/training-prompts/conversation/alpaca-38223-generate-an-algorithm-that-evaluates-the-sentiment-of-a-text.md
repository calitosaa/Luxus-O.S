---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[38223]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate an algorithm that evaluates the sentiment of a text.

## Asistente
1. Begin by splitting the text into individual sentences.
2. For each sentence, use a sentiment analysis tool to assign it a sentiment score from -1 (most negative) to +1 (most positive). 
3. For each sentence, assign a weight to the sentiment score based on the length of the sentence.
4. Take the sum of all sentiment scores and their corresponding weights in order to calculate the overall sentiment of the text.
