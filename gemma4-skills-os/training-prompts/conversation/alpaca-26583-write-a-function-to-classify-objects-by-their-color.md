---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[26583]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to classify objects by their color.

Contexto/Input:
Objects: apple (red), banana (yellow), book (black)

## Asistente
def classify_by_color(objects):
    classified = {'red': [], 'yellow': [], 'black': []}
    for object in objects:
        name, color = object.split(' (')
        color = color[:-1]  # remove trailing )
        classified[color].append(name)
    return classified
