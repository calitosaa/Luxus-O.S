---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[5094]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given two tables, combine the tables and generate a view.

Contexto/Input:
Table A:  student

Name   | Age  | Grade
------------------
John   | 20   | A

Table B: score

Name   | Test_1| Test_2
------------------------
John   | 50    | 80

## Asistente
CREATE VIEW student_score AS
SELECT s.Name, s.Age, s.Grade, sc.Test_1, sc.Test_2
FROM student s
JOIN score sc ON s.Name = sc.Name;
