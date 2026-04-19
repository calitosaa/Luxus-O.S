---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[12862]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a web page to allow users to register for your workshop.

## Asistente
<html>
  <head>
    <title>Register for Workshop</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>Ready to join the workshop? Please fill out the form below to complete your registration.</p>
    <form action="register.php" method="post">
      <p>Name: <input type="text" name="name" /></p>
      <p>Email: <input type="text" name="email" /></p>
      <p>Phone: <input type="text" name="phone" /></p>
      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
