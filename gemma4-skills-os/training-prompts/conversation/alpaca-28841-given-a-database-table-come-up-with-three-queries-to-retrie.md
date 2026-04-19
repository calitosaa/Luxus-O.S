---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28841]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given a database table, come up with three queries to retrieve some information.

Contexto/Input:
Table: Teacher
Columns: teacher_id, name, subject

## Asistente
Query 1: SELECT * FROM Teacher;
Query 2: SELECT name, subject FROM Teacher WHERE teacher_id = "XX";
Query 3: SELECT name FROM Teacher WHERE subject = "XX";
