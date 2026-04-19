---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[29726]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a classification model which can classify whether a given email is spam or not.

Contexto/Input:
No input

## Asistente
The classification model should be able to take in a piece of email text, process it into its component features, and then make a prediction as to whether the email is spam or not. The model will then output a probability score ranging from 0 to 1, where 0 is not spam and 1 is spam. The model should be trained using labeled data, which includes emails labelled as spam or not spam. The model should also incorporate feature importance and be able to identify which features are most important in the classification of an email.
