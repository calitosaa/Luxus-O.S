---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[10944]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a web page with a contact form.

## Asistente
<html>
<head> 
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact Form</h1>
    <p>We would love to hear from you! Please fill out this form to contact us.</p>

    <form action="mailto:example@example.com" method="post" enctype="text/plain">
        Name: <input type="text" name="name"/><br/><br/> 
        Email: <input type="text" name="email"/><br/><br/> 
        Message: <textarea name="message"></textarea><br/><br/>
        <input type="submit" value="Send"/>
    </form>
</body>
</html>
