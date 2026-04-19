---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[17357]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function to find the distance between two points.

## Asistente
"""
Create a function to find the distance between two points
"""

import math 

def distanceBetweenPoints(x1,y1,x2,y2): 
    
    dist = math.sqrt((x2 - x1)**2 + (y2 - y1)**2) 
      
    return dist 
  
# Driver Code 
x1,y1 = (3,2) 
x2,y2 = (8,10) 

print("Distance between two points:",distanceBetweenPoints(x1,y1,x2,y2))
