---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[22654]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Train a classification model to classify emails as "spam" or "not-spam", using the given dataset.

Contexto/Input:
csv dataset containing 200 emails.

## Asistente
Input Dataset:

Email Content, Spam/Not-Spam

The cat sat on the mat, Not-Spam
Earning extra money is easy, Spam 
Make sure to check your emails, Not-Spam
...
Output Model:

Trained classification model, with accuracy score of at least 95%.
