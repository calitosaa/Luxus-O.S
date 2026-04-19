---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[6476]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to convert a given hexadecimal number to its decimal equivalent.

## Asistente
def hex_to_decimal(num):
    decimal = 0
    for i in range(len(num)):
        if num[i] == 'A':
            decimal += 10 * (16 ** (len(num)-i-1))
        elif num[i] == 'B':
            decimal += 11 * (16 ** (len(num)-i-1))
        elif num[i] == 'C':
            decimal += 12 * (16 ** (len(num)-i-1))
        elif num[i] == 'D':
            decimal += 13 * (16 ** (len(num)-i-1))
        elif num[i] == 'E':
            decimal += 14 * (16 ** (len(num)-i-1))
        elif num[i] == 'F':
            decimal += 15 * (16 ** (len(num)-i-1))
        else:
            decimal += int(num[i]) * (16 ** (len(num)-i-1))
    return decimal
