---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[36125]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program to collect data from a web page.

Contexto/Input:
URL of the web page: https://www.example.com

## Asistente
Program code to collect the data:

import requests
 
url = ‘https://www.example.com’
r = requests.get(url)
data = r.text
print(data)
