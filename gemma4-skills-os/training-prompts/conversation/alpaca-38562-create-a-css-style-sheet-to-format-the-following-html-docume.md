---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[38562]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a CSS style sheet to format the following HTML document.

Contexto/Input:
<html>
  <head>
    <title> CSS Demo </title>
  </head>
  <body>
    <h1> Welcome! </h1>
    <p> This is a CSS demo. </p>
   </body> 
</html>

## Asistente
<html>
  <head>
    <title> CSS Demo </title>
    <style> 
      body {
        text-align: center;
        background-color: #F8F8F8;
        font-family: sans-serif;
      }

      h1 {
        font-size: 2rem;
        font-weight: bold;
        color: #0059b3;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
      }

      p {
        font-size: 1.5rem;
        font-weight: bold;
        color: #444;
      }
    </style>
  </head>
  <body>
    <h1> Welcome! </h1>
    <p> This is a CSS demo. </p>
   </body> 
</html>
