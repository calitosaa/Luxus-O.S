---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[4998]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a valid HTML page given the following content.

Contexto/Input:
Header: Welcome to My Website
Content: 
This is my website where I feature my photography work. I hope you enjoy looking through my portfolio!

## Asistente
<!DOCTYPE html>
<html>
   <head>
      <title>Welcome to My Website</title>
   </head>
   <body>
      <h1>Welcome to My Website</h1>
      <p>This is my website where I feature my photography work. I hope you enjoy looking through my portfolio!</p>
   </body>
</html>
