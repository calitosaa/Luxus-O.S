---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5432]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a web page displaying the given information.

Contexto/Input:
Item: Shoes
Price: $32
Description: These shoes are made with a durable tread and breathable material.

## Asistente
<html> 
  <head> 
    <title>Shoes</title> 
  </head> 
  <body> 
    <h1>Shoes</h1> 
    <p>Price: $32</p>
    <p>Description: These shoes are made with a durable tread and breathable material.</p>
  </body> 
</html>
