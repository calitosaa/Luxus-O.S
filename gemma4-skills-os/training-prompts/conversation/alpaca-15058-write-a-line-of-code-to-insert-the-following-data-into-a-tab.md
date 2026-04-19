---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[15058]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a line of code to insert the following data into a table called ‘Orders’.

Contexto/Input:
Object {order_id: "ABC123", quantity: "10", price: "17.99"}

## Asistente
INSERT INTO Orders (order_id, quantity, price) VALUES ("ABC123", "10", 17.99);
