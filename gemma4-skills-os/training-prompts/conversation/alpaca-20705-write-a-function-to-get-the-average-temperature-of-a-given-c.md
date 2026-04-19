---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[20705]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to get the average temperature of a given city in celsius using OpenWeatherMap API.

Contexto/Input:
city: Tokyo

## Asistente
"""
Write a function to get the average temperature of a given city in celsius using OpenWeatherMap API.
"""

import requests
import json 

def get_average_temp(city):
    key = 'Your OpenWeatherMap API key'
    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&appid={}'.format(city, key)
    response = requests.get(url)
    data = json.loads(response.text)
    temperature = data['main']['temp']
    celsius = temperature - 273.15
    return celsius
    
if __name__ == '__main__':
    print(get_average_temp('Tokyo'))
