---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28431]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Compute the total amount of product sold between the two dates.

Contexto/Input:
Start Date: 8/1/2020
End Date: 8/30/2020

## Asistente
SELECT SUM(quantity) as total_sold FROM sales WHERE date BETWEEN '2020-08-01' AND '2020-08-30';
