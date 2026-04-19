---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18049]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Describe a system capable of detecting hate speech in tweets.

## Asistente
A system for detecting hate speech in tweets should first employ a technique for preprocessing the tweets, including tokenizing, token-level normalization (e.g. stemming and lemmatization), and removing stop words. Once the tweets are preprocessed, they can be distributed into clusters based on lexical similarity. Next, a text classification model such as a Naive Bayes or Support Vector Machine (SVM) can be used to classify the tweets into hate speech and non-hate speech. The text classification model should be trained on a dataset annotated with examples of hate speech and non-hate speech, with features such as N-grams and Part-of-Speech tags. Finally, the system should employ a mechanism for deciding when to flag a tweet as hate speech and when not to, depending on the confidence score output by the model.
