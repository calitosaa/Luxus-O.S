---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[37377]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Parse the following HTML code and create a DOM tree

Contexto/Input:
<html>
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <p>This is a paragraph</p>
        <div>This is a div</div>
    </body>
</html>

## Asistente
DOM Tree:

html
--head 
----title 
------“Hello World”
--body 
----p
------“This is a paragraph”
----div 
------“This is a div”
