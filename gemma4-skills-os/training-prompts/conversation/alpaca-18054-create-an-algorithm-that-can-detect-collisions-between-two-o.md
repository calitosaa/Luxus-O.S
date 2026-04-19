---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18054]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm that can detect collisions between two objects.

## Asistente
This algorithm should use geometry to detect if two objects have collided. It should first determine the coordinates of the two objects. Depending on the shapes of the objects, the algorithm should use either a point-rectangle, point-circle, circle-circle, or rectangle-rectangle collision detection algorithm. The algorithm should first perform a bounding box/circle check and then use the appropriate method to determine its intersecting points. If the bounding boxes or circles overlap, the algorithm should use the intersecting points to calculate the object's exact collision points or areas, and then come to a conclusion whether two objects have collided or not.
