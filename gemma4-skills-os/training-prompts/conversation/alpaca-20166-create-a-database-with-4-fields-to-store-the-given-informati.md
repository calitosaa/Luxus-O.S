---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[20166]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a database with 4 fields to store the given information.

Contexto/Input:
Name, Age, Gender, Date of Birth

## Asistente
Table Name: Profile

Field 1: Name (VARCHAR data type | Up to 100 characters)
Field 2: Age (INT data type)
Field 3: Gender (VARCHAR data type | Up to 10 characters)
Field 4: Date of Birth (DATE data type)
