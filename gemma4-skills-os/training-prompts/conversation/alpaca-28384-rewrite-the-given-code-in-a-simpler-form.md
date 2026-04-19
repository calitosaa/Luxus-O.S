---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28384]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Rewrite the given code in a simpler form.

Contexto/Input:
# Declare a list of numbers
nums = [12, 10, 32, 3, 66, 17, 42, 99, 20]

# Declare new variables
newlist = []

# Iterate nums and add numbers to newlist
for i in nums:
    if i % 2 == 0:
        newlist.append(i)

print(newlist)

## Asistente
# Declare a list of numbers
nums = [12, 10, 32, 3, 66, 17, 42, 99, 20]

# Iterate nums and add even numbers to newlist
newlist = [i for i in nums if i % 2 == 0]

print(newlist)
