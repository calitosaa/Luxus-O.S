---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[26795]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to convert a year from Gregorian calendar to Mayan calendar

## Asistente
def mayan_calendar(year):
    base_date = 1518 #representation of Dec 21, 2012 in Gregorian calendar
    days_in_year = 365 #days in a year
    cycles_in_year = 5 #Mayan calendar has 5 cycles of 260 days per year
    diff = year - base_date 
    mayan_year = diff*cycles_in_year
    return mayan_year
