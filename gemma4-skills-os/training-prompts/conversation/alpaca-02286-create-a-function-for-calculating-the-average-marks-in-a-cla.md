---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[2286]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function for calculating the average marks in a class

## Asistente
def calculate_avg_marks(marks):
  # calculate the average marks
  totalMarks = 0
  for m in marks:
    totalMarks += m
  return totalMarks/len(marks)
