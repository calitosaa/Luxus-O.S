---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[3761]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given a database table, generate 5 useful SQL queries

Contexto/Input:
Table Schema:

books(id,title,author,genre,price)

## Asistente
1. SELECT AVG(price) FROM books;
2. SELECT title, author FROM books WHERE genre='horror';
3. SELECT COUNT(*) FROM books WHERE price>20;
4. SELECT * FROM books WHERE author='John Doe';
5. SELECT title, price FROM books WHERE price>15 ORDER BY price ASC;
