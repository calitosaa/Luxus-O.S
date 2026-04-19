---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[17286]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Develop a simple program in any programming language which takes two numbers as an input and outputs the largest of them.

Contexto/Input:
Number 1 = 30
Number 2 = 50

## Asistente
# Python program to find the largest of two numbers 

num1 = 30
num2 = 50 

# conditional operator 
if (num1 > num2): 
	print(num1, "is maximum") 
else: 
	print(num2, "is maximum")
