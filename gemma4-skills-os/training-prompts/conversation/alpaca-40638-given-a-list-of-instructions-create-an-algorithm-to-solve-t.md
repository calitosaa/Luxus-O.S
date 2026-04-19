---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40638]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given a list of instructions, create an algorithm to solve the problem.

Contexto/Input:
1. Ask the user to input the number of items 
2. Read in item numbers 
3. Compute the sum of the item numbers 
4. Print out the sum of the item numbers

## Asistente
// Algorithm to compute the sum of a given number of items 

START 

Step 1: Ask the user to input the number of items (n) 
Step 2: Read in the n item numbers 
Step 3: Set the sum of items (s) to 0 
Step 4: For each item, add the item number to s and increment the item counter 
Step 5: Print the result of s 

END
