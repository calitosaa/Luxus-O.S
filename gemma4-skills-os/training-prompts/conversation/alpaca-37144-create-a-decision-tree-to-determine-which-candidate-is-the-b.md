---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[37144]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a decision tree to determine which candidate is the best fit for a given job.

Contexto/Input:
Job:  Web Developer
Candidates: 
-Rohit: 5 years experience in web development, graduated from a top college
-Amit: 3 years experience in web development
-Sid: 1 year experience in web development, graduated from a top college

## Asistente
Web Developer
                     (5 years experience)       (other)
                  /           |           \
                  /            |            \
             Rohit          Amit          Sid 
            (top college)    (3 years exp)  (top college, 1 year exp)
