---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[17785]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a Python program to find the maximum number in a list.

Contexto/Input:
list1 = [1, 5, 10, 3, 9]

## Asistente
#Find maximum in list
list1 = [1, 5, 10, 3, 9]
max_num = 0
for num in list1:
    if num > max_num:
        max_num = num
print('Maximum number in the list is', max_num)
