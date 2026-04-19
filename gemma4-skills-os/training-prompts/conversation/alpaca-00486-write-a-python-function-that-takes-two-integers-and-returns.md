---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[486]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a Python function that takes two integers and returns their least common multiple.

## Asistente
def lcm(a, b):
  if a > b:
    greater = a
  else:
    greater = b
  while(True):
    if((greater % a == 0) and (greater % b == 0)):
      lcm = greater
      break
    greater += 1
  return lcm

print(lcm(15, 18))
# Output: 90
