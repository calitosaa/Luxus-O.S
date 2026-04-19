---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[14738]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a computer program to predict the probability of a coin tossing event.

## Asistente
import random

def predict_coin():
    if random.random() > 0.5:
        return "Heads"
    else:
        return "Tails"
