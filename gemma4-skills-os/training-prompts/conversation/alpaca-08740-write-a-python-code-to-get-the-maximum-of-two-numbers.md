---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[8740]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a Python code to get the maximum of two numbers.

## Asistente
def max(a, b):
""" Function to get the maximum of two numbers

This function will take two numbers as arguments and
return the maximum of the two.

:param a: The first number.
:param b: The second number.
:return: The maximum of two numbers.
"""
    if a > b:
        return a
    else:
        return b
