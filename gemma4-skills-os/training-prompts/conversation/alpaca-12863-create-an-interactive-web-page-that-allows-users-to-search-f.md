---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[12863]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an interactive web page that allows users to search for books.

## Asistente
<html>
  <head>
    <title>Book Search</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>Ready to search for a book? Please enter your keywords below and press the search button.</p>
    <form action="search.php" method="post">
      <p>Keywords: <input type="text" name="keywords" /></p>
      <input type="submit" value="Search" />
    </form>
  </body>
</html>
