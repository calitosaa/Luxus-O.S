---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[17393]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Analyze two datasets and develop an algorithm to classify them.

Contexto/Input:
Datasets: 
Dataset A: Data of students' performance in past exams
Dataset B: Data of students' performance in current exams

## Asistente
The algorithm should analyze both datasets, collect features such as test scores and class attendance records, and compare them to each other. If a student's scores in the current exam is higher than their scores in past exams, then the algorithm should classify them as “improved”. If a student's scores in the current exam is lower than their scores in past exams, then the algorithm should classify them as “deteriorated”. Furthermore, if the scores in the current exam are exactly the same as the scores in the past exam, then the algorithm should classify them as “same”.
