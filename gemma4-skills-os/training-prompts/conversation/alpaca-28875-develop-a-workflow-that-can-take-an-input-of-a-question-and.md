---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28875]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Develop a workflow that can take an input of a question and automatically summarize the answer.

## Asistente
A workflow for automatically summarizing answers to a given question would likely involve natural language processing (NLP) to extract relevant information from the question, followed by information retrieval (IR) to locate the relevant resources, and then text summarization to deliver a concise summary of the answer. The workflow could involve pre-processing steps such as tokenization, word embedding, part-of-speech tagging, and Named Entity Recognition to help the system better understand the question. In the retrieval step, a tf-idf algorithm could be used to rank relevant material. Finally, a variety of text summarization algorithms can be used to generate a summarized answer.
