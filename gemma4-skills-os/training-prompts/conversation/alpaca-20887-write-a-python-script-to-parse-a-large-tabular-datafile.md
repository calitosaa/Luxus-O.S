---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[20887]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a Python script to parse a large tabular datafile.

## Asistente
"""
Write a python script to parse a large tabular data file.
"""

import pandas as pd

def parse_datafile(file_name):
    df = pd.read_csv(file_name, sep='\t', engine='python')
    return df

if __name__ == '__main__':
    print(parse_datafile("data.txt"))
