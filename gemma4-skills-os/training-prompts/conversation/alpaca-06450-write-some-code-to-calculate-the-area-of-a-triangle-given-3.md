---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[6450]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write some code to calculate the area of a triangle given 3 sides.

## Asistente
"""
Calculate the area of a triangle given 3 sides
"""

def area_triangle(a, b, c): 
    # calculate the semi-perimeter 
    s = (a + b + c) / 2
  
    # calculate the area 
    area = (s * (s-a) * (s-b) * (s-c)) ** 0.5
    return area 
  
# Driver Code 
# a, b, c are lengths of the sides of triangle
a = 4
b = 5
c = 6
print("Area of triangle is : %.2f" % area_triangle(a, b, c))
