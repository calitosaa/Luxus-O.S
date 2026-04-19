---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[7911]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Build a SQL query that creates a table.

Contexto/Input:
Table Name: Books

Attributes:
- book_id (int)
- title (varchar)
- author (varchar)
- publisher (varchar)
- publication_date (date)

## Asistente
CREATE TABLE Books ( 
  book_id INT, 
  title VARCHAR(255), 
  author VARCHAR(255), 
  publisher VARCHAR(255), 
  publication_date DATE
);
