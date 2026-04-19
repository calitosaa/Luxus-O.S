---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18300]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm that checks if a given sentence has sentence fragments.

## Asistente
Algorithm: 

1. Split the given sentence into individual words.
2. Check if each word contains a period, question mark, or exclamation mark.
3. If it does, check if the word is preceded by at least one other word. If yes, return false, else return true.
4. If the word does not contain a punctuation mark, return false.
