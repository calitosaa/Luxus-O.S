---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18918]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a SQL query that joins two tables.

Contexto/Input:
Table 1: users
| id | name  |
| -- | ----- |
| 1  | John  |
| 2  | Sarah |

Table 2: blogposts
| id | author_id  | title |
| -- | ---------- | ----- |
| 1  | 1          | Post1 |
| 2  | 2          | Post2 |

## Asistente
SELECT users.name, blogposts.title 
FROM users 
INNER JOIN blogposts 
ON users.id = blogposts.author_id;
