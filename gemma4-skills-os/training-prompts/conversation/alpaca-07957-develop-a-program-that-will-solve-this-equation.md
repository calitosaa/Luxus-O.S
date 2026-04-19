---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[7957]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Develop a program that will solve this equation

Contexto/Input:
x^2 + 2x - 15 = 0

## Asistente
def solve_equation(a, b, c):
    discriminant = (b**2) - (4*a*c)
    x1 = (-b + (discriminant**(1/2))) / (2*a)
    x2 = (-b - (discriminant**(1/2))) / (2*a)
    return x1, x2

print(solve_equation(1, 2, -15))
