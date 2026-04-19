---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[26228]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a classification algorithm to detect spam emails.

Contexto/Input:
This is an email example:

Subject: Promotional offer

Dear Customer,

We have a special offer in store for you! Get 50% off when you shop today. 

Click the link below to find out more.

## Asistente
The algorithm will take the given email and first use natural language processing techniques to tokenize and split the email into its individual words and phrases. The algorithm will then use the bag-of-words technique to convert the text into numerical data represented by a vector of words. 

The algorithm will then use the vector of words as input for a classifier, such as a decision tree, logistic regression, or support vector machine to classify the email as either spam or not spam. The classifier can use several features, including the subject line, words used, and links provided. 

The algorithm will then output a result - either 1 for spam, or 0 for not spam - depending on the input email.
