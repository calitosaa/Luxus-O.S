---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[13459]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create HTML code for a registration form.

## Asistente
<!DOCTYPE html>
<html>
<head>
<title>Registration Form</title>
</head>
<body>

<form action="/form-submit" method="POST">
  <div>
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name">
  </div>
  <div>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email">
  </div>
  <div>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password">
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>

</body>
</html>
