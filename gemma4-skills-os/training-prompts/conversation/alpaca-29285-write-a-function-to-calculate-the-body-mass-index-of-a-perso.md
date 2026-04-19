---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[29285]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to calculate the body mass index of a person.

## Asistente
def get_bmi(weight, height):
    """This function calculates and returns the body mass index of a person.
    
    Arguments:
    weight -- weight of the person in kilograms.
    height -- height of the person in meters.
    
    Returns:
    bmi -- calculated body mass index of the person.
    """
    
    bmi = weight / (height * height)
    return bmi
