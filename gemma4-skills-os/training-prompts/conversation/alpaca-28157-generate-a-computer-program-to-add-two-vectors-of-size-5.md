---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28157]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a computer program to add two vectors of size 5.

Contexto/Input:
[3, 2, 1, 5, 7], [4, 1, 6, 9, 0]

## Asistente
def add_vector(v1, v2):
    if len(v1) != len(v2):
        raise Exception("Vectors are of different lengths")
    result = []
    for i in range(len(v1)):
        result.append(v1[i] + v2[i])
    return result
