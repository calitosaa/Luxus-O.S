---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[2966]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a standard HTML page with a table and two buttons.

## Asistente
<!DOCTYPE html>
<html>
<head>
    <title>Table Example</title>
</head>
<body>
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>James</td>
            <td>24</td>
        </tr>
        <tr>
            <td>John</td>
            <td>30</td>
        </tr>
    </table>
    <button>Add</button>
    <button>Delete</button>
</body>
</html>
