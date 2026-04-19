---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[19868]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program the calculates the distance between two points.

## Asistente
def distance(x1, y1, x2, y2): 
    # Calculate distance using Euclidean distance 
    dist = ((x2 - x1)**2 + (y2 - y1)**2)**0.5 
    return dist 
  
# Driver code 
# Output should be 5.0
x1 = 3
y1 = 4 
x2= 6
y2 = 8
print(distance(x1, y1, x2, y2))
