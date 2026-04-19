---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[6503]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a SQL query to find the list of customers who have orders in the month of February 2021.

## Asistente
SELECT c.customer_name 
FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id 
WHERE month(o.order_date) = 2 AND year(o.order_date) = 2021;
