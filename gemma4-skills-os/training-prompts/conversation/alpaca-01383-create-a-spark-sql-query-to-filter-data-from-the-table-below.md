---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[1383]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a Spark SQL query to filter data from the table below.

Contexto/Input:
Table: Employee
Columns: Employee_number, Employee_name, Department,  Average_rating

Filter: Department = 'HR'

## Asistente
SELECT Employee_number, Employee_name, department, Average_rating 
FROM Employee 
WHERE Department = 'HR';
