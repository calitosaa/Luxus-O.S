---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[27461]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Calculate each department’s budget-to-salary ratio

Contexto/Input:
Given two tables: instructor, department.

## Asistente
SELECT d.name, (d.budget/ SUM(i.salary)) as budget_salary_ratio FROM instructor i JOIN department d ON i.dept_name = d.name GROUP BY i.dept_name;
