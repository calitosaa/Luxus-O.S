---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5090]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given a table with three columns, identify the type of relationship between them.

Contexto/Input:
Table:

    A    B   C
   Joe  23  USA

## Asistente
A is related to B since Joe is related to 23, and B is related to C since 23 is related to USA. Thus, there is a one-to-one relationship between A and B, and also a one-to-one relationship between B and C.
