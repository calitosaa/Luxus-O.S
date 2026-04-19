---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[21844]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Execute the following SQL command

Contexto/Input:
SELECT first_name, last_name, SUM(sales) 
    FROM employees
    GROUP BY first_name, last_name
    ORDER BY 3 DESC;

## Asistente
This SQL command will select the first and last name, as well as the total sales for each employee. The result will be ordered by total sales in descending order.
