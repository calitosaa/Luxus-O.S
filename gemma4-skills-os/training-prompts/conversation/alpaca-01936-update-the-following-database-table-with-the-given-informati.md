---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[1936]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Update the following database table with the given information.

Contexto/Input:
TABLE: USERS
Columns: id, username, fullname 

Data:
id=1, username="johndoe", fullname="John Doe"

## Asistente
UPDATE USERS
SET username="johndoe", fullname="John Doe"
WHERE id=1;
