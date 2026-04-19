---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[34288]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a script which can calculate the total sum of a set of numbers.

Contexto/Input:
{10, 20, 30, 40}

## Asistente
sum = 100 
 
# Calculate the total sum
 
total = 0
 
for x in [10, 20, 30, 40]:
    total += x
 
print(total)
