---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40310]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given two equations write a sequence of steps to solve them.

Contexto/Input:
Equation 1: 2x + y = 4
Equation 2: y + x = 3

## Asistente
Steps to solve: 
1. Subtract x from both sides of equation 1: 2x + y = 4 → 2x = 4 - y 
2. Subtract y from both sides of equation 2: y + x = 3 → x = 3 - y 
3. Substitute x from equation 2 into equation 1: 2x = 4 - y → 2(3 - y) = 4 - y
4. Simplify: 6 - 2y = 4 - y 
5. Add 2y to both sides: 6 = 2y + y
6. Simplify: 6 = 3y
7. Divide both sides by 3: y = 2 
8. Substitute y into equation 2: x = 3 - 2 = 1 
Therefore, x = 1, y = 2.
