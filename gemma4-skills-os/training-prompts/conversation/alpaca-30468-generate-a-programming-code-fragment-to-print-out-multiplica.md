---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[30468]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a programming code fragment to print out multiplication table up to 10.

## Asistente
for i in range(1, 11):
  for j in range(1, 11):
    print("{0} x {1} = {2:2}".format(i, j, i*j))
  print("")
