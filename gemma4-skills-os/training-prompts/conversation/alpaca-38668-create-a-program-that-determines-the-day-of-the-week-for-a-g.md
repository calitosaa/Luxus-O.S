---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[38668]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program that determines the day of the week for a given date.

Contexto/Input:
Date: 5th January, 2021.

## Asistente
def get_day_of_week(date):
  # This function takes in a date as a string and returns the day of the week. 
  from datetime import datetime
  date_formatted = datetime.strptime(date, '%d %B, %Y')
  day_of_week = date_formatted.strftime("%A")
  return day_of_week
  
result = get_day_of_week("5th January, 2021")
print(result)

# Output 
Thursday
