---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[32963]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a Python script to print out the prime numbers between 10 and 30.

## Asistente
for num in range(10,31):
    if num > 1:
        for i in range(2, num):
            if (num % i) == 0:
                break
        else:
            print (num)
