---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[41804]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Based on the following comment, edit the code to achieve the desired result.

Contexto/Input:
def greet(name):
    """Print a greeting to the name provided."""
    # TODO: capitalize the name
    print("Hello, " + name + "!")

## Asistente
def greet(name):
    """Print a greeting to the name provided."""
    # capitalize the name
    print("Hello, "+ name.capitalize() + "!")
