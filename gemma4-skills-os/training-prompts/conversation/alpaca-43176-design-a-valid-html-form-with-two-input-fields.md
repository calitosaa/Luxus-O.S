---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[43176]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design a valid HTML form with two input fields.

## Asistente
<form action="form_script.php" method="POST">
  <label for="name">Name:</label>
  <input type="text" name="name" id="name" />

  <label for="email">Email:</label>
  <input type="email" name="email" id="email" />

  <input type="submit" value="Submit" />
</form>
