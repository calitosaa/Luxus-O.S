---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40689]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate an HTML page with a header and a paragraph of text.

Contexto/Input:
The header should say "Welcome to my webpage" 
The paragraph should say "This is an example of a webpage created using HTML"

## Asistente
"""
Generate an HTML page with a header and a paragraph of text.

<html>
<head>
    <title>Welcome to my webpage</title>
</head>
<body>
    <h1>Welcome to my webpage</h1>
    <p>This is an example of a webpage created using HTML</p>
</body>
</html>
"""
