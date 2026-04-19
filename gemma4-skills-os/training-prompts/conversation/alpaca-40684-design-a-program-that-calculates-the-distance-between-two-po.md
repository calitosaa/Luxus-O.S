---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40684]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design a program that calculates the distance between two points given the coordinates of the points.

Contexto/Input:
The coordinates of Point A are (2, 3) 
The coordinates of Point B are (5, 7)

## Asistente
"""
Design a program that calculates the distance between two points 
given the coordinates of the points.

import math

def calc_distance(point1, point2):
    x1, y1 = point1
    x2, y2 = point2
    dist = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    return dist

if __name__ == "__main__":
    pointA = (2, 3)
    pointB = (5, 7)
    dist = calc_distance(pointA, pointB)
    print("The distance between Point A and Point B is", dist)

"""
