---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[33665]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Develop a survey to collect customer feedback

## Asistente
<html>
  <head>
    <title>Customer Feedback Survey</title>
  </head>
  <body>
    <h1>Customer Feedback Survey</h1>
    <form action="process_feedback.php" method="post">
      <h2>General Information</h2>
      <p>Please provide some information about yourself.</p>
      <div>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name">
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" name="age" min="1" max="120" id="age">
      </div>
      <div>
        <label for="occupation">Occupation:</label>
        <input type="text" name="occupation" id="occupation">
      </div>
      <h2>Feedback</h2>
      <p>Please describe the quality of our service. (1-5, 1=very poor, 5=excellent)</p>
      <div>
        <label for="service_quality">Service Quality:</label>
        <input type="number" name="service_quality" min="1" max="5" id="service_quality">
      </div>
      <p>Please rate the usability of our website. (1-5, 1=very poor, 5=excellent)</p>
      <div>
        <label for="website_usability">Website Usability:</label>
        <input type="number" name="website_usability" min="1" max="5" id="website_usability">
      </div>
      <p>Do you have any suggestions for improvement?</p>
      <div>
        <label for="suggestions">Suggestions:</label>
        <textarea name="suggestions" id="suggestions"></textarea>
      </div>
      <input type="submit" name="submit" value="Submit">
    </form>
  </body>
</html>
