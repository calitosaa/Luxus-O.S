---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[13403]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design an algorithm for searching for duplicate contact entries in a list of emails.

## Asistente
The algorithm should first read each email address to determine if the address is unique or a duplicate of an existing address. To ensure accuracy, the data should be broken down into tokens based on the local-part (before the @) and the domain-part (after the @). Then, these tokens can be compared to other email addresses in the list to identify duplicates. To handle the possibility of typos, a fuzzy matching algorithm can be implemented that accounts for errors in the input. For example, if two entries have matching local-part tokens but different domain-part tokens, a fuzzy matching algorithm can be used to decide whether it should be categorized as a duplicate or a typo. Additionally, a binary search tree could be used to compare the tokenized data and determine faster whether an email address is a duplicate or not.
