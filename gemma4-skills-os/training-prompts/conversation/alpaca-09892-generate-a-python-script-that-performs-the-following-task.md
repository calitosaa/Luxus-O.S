---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[9892]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a Python script that performs the following task.

Contexto/Input:
Print the second largest number in a list of numbers

## Asistente
# List of numbers 
list1 = [10, 20, 4, 45, 99] 
  
# sorting the list 
list1.sort() 
  
# printing the second last element 
print("Second largest number is:", list1[-2])
