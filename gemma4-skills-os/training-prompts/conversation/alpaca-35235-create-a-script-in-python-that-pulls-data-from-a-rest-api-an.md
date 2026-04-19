---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[35235]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a script in Python that pulls data from a REST API and stores it in a pandas DataFrame.

## Asistente
import requests 
import pandas as pd 
  
# URL of the API 
url = 'https://api.example.com/v1/data'
  
# Get the API data 
data = requests.get(url).json()
  
# Store the API data in a pandas Dataframe 
df = pd.DataFrame(data['items']) 
  
# Print the Dataframe 
print(df)
