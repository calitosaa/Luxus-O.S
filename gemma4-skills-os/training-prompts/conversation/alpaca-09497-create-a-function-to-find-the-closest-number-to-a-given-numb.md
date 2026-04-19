---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[9497]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function to find the closest number to a given number.

Contexto/Input:
num = 10, list = [3, 5, 7, 8, 11, 16]

## Asistente
def closest_num(num, list):
    closest = None
    for i in list:
        if closest is None or abs(num - i) < abs(num - closest):
            closest = i
    return closest

closest_num(10, [3, 5, 7, 8, 11, 16]) 
# Output: 8
