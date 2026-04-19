---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[7175]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a query in PostgreSQL to list customers with orders in a particular month.

Contexto/Input:
Month: April 2021

## Asistente
SELECT customers.name 
FROM customers 
INNER JOIN orders 
ON customers.id = orders.customer_id 
WHERE EXTRACT(MONTH FROM orders.order_created_at) = '04' 
  AND EXTRACT (YEAR FROM orders.order_created_at) = '2021'
