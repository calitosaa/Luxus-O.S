---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[16899]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program to generate a random matrix of size n by m.

## Asistente
def generate_random_matrix(n, m):
    matrix = []
    for i in range(n):
        row = []
        for j in range(m):
            random_num = random.randrange(0, 10)
            row.append(random_num)
        matrix.append(row)
    return matrix
