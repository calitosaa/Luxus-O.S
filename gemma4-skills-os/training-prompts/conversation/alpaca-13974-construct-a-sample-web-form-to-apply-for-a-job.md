---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[13974]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a sample web form to apply for a job.

## Asistente
<html>

<head>
  <title>Job Application Form</title>
</head>
<body>
  <h1>Job Application Form</h1>
  <form>
    <h2>Personal Information</h2>
    <label>Name:</label>
    <input type="text" name="name" />

    <label>Email:</label>
    <input type="text" name="email" />

    <label>Phone Number:</label>
    <input type="number" name="phone" />

    <h2>Education</h2>
    <label>Highest Level of Education:</label>
    <input type="text" name="education" />

    <label>School/College/University:</label>
    <input type="text" name="educational_institute" />

    <h2>Skills and Qualifications</h2>
    <label>Relevant Skills:</label>
    <input type="text" name="skills" />
    
    <label>Major Achievements in Relevant Field:</label>
    <input type="text" name="achievements" />

    <h2>Experience</h2>
    <label>Previous Employer:</label>
    <input type="text" name="previous_employer" />

    <label>Previous job role:</label>
    <input type="text" name="previous_job_role" />

    <h2>References</h2>
    <label>Reference 1 Name:</label>
    <input type="text" name="reference_1" />
    
    <label>Reference 1 Contact:</label>
    <input type="text" name="reference_1_contact" />
    
    <label>Reference 2 Name:</label>
    <input type="text" name="reference_2" />
    
    <label>Reference 2 Contact:</label>
    <input type="text" name="reference_2_contact" />

<input type="submit" value="Submit" />
</form>
</body>
</html>
