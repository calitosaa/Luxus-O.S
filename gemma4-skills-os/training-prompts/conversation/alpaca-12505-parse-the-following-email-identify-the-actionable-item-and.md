---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[12505]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Parse the following email, identify the actionable item, and assign it a label.

Contexto/Input:
Dear [person name],

I hope this email finds you well. As we discussed last week, I need your help in finding the data points for our latest report. It would be great if you can retrieve the data points by Friday, 10 am EST.

Best,
[my name]

## Asistente
Actionable Item: Retrieve the data points
Label: Retrieve Data Points by Friday, 10 am EST
