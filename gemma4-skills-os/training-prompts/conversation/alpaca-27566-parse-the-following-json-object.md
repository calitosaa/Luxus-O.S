---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[27566]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Parse the following JSON object.

Contexto/Input:
{
  "items": [
    {
      "name": "iPhone",
      "price": 500
    },
    {
      "name": "iPad",
      "price": 800
    }
  ]
}

## Asistente
The input is a dictionary containing an array of dictionaries, each containing a name and price.
 
 names = [item['name'] for item in json_object['items']] 
 prices = [item['price'] for item in json_object['items']]
