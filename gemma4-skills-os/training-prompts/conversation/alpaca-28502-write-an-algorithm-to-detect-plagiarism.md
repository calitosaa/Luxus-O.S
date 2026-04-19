---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28502]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm to detect plagiarism.

## Asistente
def detect_plagiarism(text):
  # Step 1: Split text into individual words
  text_words = text.split()
  
  # Step 2: Parse each word and compare to a database of words
  for word in text_words:
    if word in database:
      # Step 3: If a word matches, check for a specified number of words after it
      # Step 4: If a certain number of words are found in the same order, flag plagiarism
      next_words = text_words[text_words.index(word)+1:text_words.index(word)+5]
      if next_words == database[word]:
        return "Plagiarism detected"

  # Step 5: If no plagiarism detected, return "No plagiarism detected"
  return "No plagiarism detected"
