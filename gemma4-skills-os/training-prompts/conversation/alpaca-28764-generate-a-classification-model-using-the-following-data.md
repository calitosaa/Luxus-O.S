---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28764]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a classification model using the following data

Contexto/Input:
Temperature, Humidity, Wind_Speed, Outdoor_Activity

50,30, 6, Hiking
60,25, 3, Sunbathing
45,50, 30, Rainy
80,20, 8, Swimming

## Asistente
The classification model can determine an outdoor activity given the temperature, humidity and wind speed. For example, if the temperature is 50 degrees, humidity is 30%, and wind speed is 6, the outdoor activity is likely to be hiking. Similarly, if the temperature is 80 degrees, humidity is 20%, and wind speed is 8, the outdoor activity is likely to be swimming.
