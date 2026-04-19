---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[35609]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a profile page for the people in a given list and format it according to the provided html template.

Contexto/Input:
Name: John Smith
Age: 32
Occupation: Painter

<template>

<html>
  <head>
    <title>Profile page</title>
  </head>
  <body>
    <h1> __________________ </h1>
    <p><b> Name:</b>  __________________</p>
    <p><b> Age:</b>  __________________</p>
    <p><b>Occupation:</b>  __________________</p>
  </body>
  </html>

## Asistente
<html>
  <head>
    <title>Profile page</title>
  </head>
  <body>
    <h1> John Smith </h1>
    <p><b> Name:</b> John Smith</p>
    <p><b> Age:</b> 32</p>
    <p><b>Occupation:</b> Painter</p>
  </body>
  </html>
