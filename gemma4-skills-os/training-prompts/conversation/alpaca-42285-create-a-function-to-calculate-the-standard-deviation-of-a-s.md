---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[42285]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function to calculate the standard deviation of a set of numbers.

## Asistente
def standard_deviation(numbers): 
    avg = sum(numbers) / len(numbers)
    var = 0
    for num in numbers:
        var += (num - avg)**2
    return (var/len(numbers))**0.5
