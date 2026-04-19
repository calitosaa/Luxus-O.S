---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18241]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a pseudo-code that can detect whether a given sentence is positive or negative.

## Asistente
func sentimentAnalysis(sentence):
  // Initialize the sentiment score
  sentimentScore = 0

  // Split the sentence into words
  words = sentence.split(' ')

  // Loop through each word
  for word in words
    // Check if word is in sentiment dictionary
    sentimentValue = checkSentimentDictionary(word)

    // Calculate sentiment score
    sentimentScore = sentimentScore + sentimentValue

  // Return the sentiment score
  return sentimentScore
