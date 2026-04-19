---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[30621]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Read the sample data and create a database using SQL.

Contexto/Input:
Sample Data:

Name | Age | Gender
John | 25 | Male 
Jane | 28 | Female
Billy | 32 | Male

## Asistente
CREATE TABLE persons (
    name VARCHAR(50),
    age INT,
    gender VARCHAR(6)
);

INSERT INTO persons (name, age, gender) 
VALUES ('John', 25, 'Male'), ('Jane', 28, 'Female'), ('Billy', 32, 'Male');
