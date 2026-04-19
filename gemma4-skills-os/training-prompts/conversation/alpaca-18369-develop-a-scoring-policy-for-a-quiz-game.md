---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18369]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Develop a scoring policy for a quiz game.

Contexto/Input:
The game has 10 questions and each question has three possible answers.

## Asistente
Scoring Policy for the Quiz Game: 
For each right answer given to a question, the player will receive 10 points. A wrong answer will result in an equivalently reversed score, resulting in negative 10 points. If the player chooses to not answer a question, they will receive 0 points. At the end of the game, the player's overall score will be calculated based on the 10 questions.
