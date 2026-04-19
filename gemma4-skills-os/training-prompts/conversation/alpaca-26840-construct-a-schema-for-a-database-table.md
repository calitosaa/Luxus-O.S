---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[26840]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a schema for a database table.

Contexto/Input:
The table will contain information about customers (name, address, email etc.)

## Asistente
The customer database table should include the following columns: name, address, email, phone number, registration date, last updated date, and customer status. The customer name should include first and last name, the address should include address line 1 and address line 2, the email should be valid and unique, the phone number should follow a specific format, the registration date should default to the current date, the last updated date should indicate the last time the customer information was edited, and the customer status should indicate active, inactive, or pending.
