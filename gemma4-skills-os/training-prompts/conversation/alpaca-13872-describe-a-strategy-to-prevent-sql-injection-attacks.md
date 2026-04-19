---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[13872]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Describe a strategy to prevent SQL injection attacks.

## Asistente
A strategy to prevent SQL injection attacks is to use parameterized queries, also known as prepared statements. Parameterized queries separate the values from the code, which prevents the database from executing anything unintended. Additionally, the application should utilize input validation, which will check for invalid data before the input is passed to the database. Finally, the application should use least privileged accounts for database access and practice good database access control.
