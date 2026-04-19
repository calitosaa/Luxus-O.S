---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[1527]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Give a 5-step process to solve this math equation.

Contexto/Input:
(x^2+5x+6)/(x-2)

## Asistente
1. Change the equation to fraction bar form, so that it can be understood more clearly: (x^2+5x+6)÷(x-2)
2. Factor the numerator: (x^2+5x+6) = (x+3)(x+2) 
3. Simplify the denominator: (x-2) = (x+2 - 4) = (x+2) - 4 
4. Simplify the numerator and denominator: (x+3)(x+2) ÷ (x+2) - 4
5. Divide the numerator and denominator: (x+3) ÷ (x+2 - 4)
