---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[29905]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Parse the following natural language query into a SQL query.

Contexto/Input:
What are the names of the instructors teaching in the ‘CS’ department?

Given two tables: instructor, department

## Asistente
SELECT i.Name FROM instructor i JOIN department d ON i.dept_name = d.name WHERE d.name = 'CS'
