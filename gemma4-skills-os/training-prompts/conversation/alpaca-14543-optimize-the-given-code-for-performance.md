---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[14543]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Optimize the given code for performance.

Contexto/Input:
s = 0
for i in range(1,n):
     for j in range(1,i*i):
         if j % i == 0:
              s += j

## Asistente
s = 0
i_sq = 1
for i in range(1,n):
     for j in range(i_sq,i*i+1):
         if j % i == 0:
              s += j
     i_sq = i*i+1 # The inner loop starts at the square of i
