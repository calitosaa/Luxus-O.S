---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40936]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Find all elements with the class "box" in the given html section, and remove them. Output the entire html section without the class "box" boxes.

Contexto/Input:
<div class="header">
    <div class="box">
        <h1>Header</h1>
    </div>
    <div class="box">
        <h2>Sub-header</h2>
    </div>
</div>

## Asistente
<div class="header">
    <h1>Header</h1>
    <h2>Sub-header</h2>
</div>
