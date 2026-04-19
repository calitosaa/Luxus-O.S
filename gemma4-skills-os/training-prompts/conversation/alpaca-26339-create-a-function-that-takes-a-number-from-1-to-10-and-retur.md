---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[26339]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function that takes a number from 1 to 10 and returns its corresponding Roman numeral.

## Asistente
def get_roman_numeral(number):
    if number == 1:
        return "I"
    elif number == 2:
        return "II"
    elif number == 3:
        return "III"
    elif number == 4:
        return "IV"
    elif number == 5:
        return "V"
    elif number == 6:
        return "VI"
    elif number == 7:
        return "VII"
    elif number == 8:
        return "VIII"
    elif number == 9:
        return "IX"
    elif number == 10:
        return "X"
