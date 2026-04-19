---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[21154]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a SQL query to return the latest order placed by each customer.

## Asistente
SELECT customer_id, MAX(order_date) FROM orders GROUP BY customer_id;
