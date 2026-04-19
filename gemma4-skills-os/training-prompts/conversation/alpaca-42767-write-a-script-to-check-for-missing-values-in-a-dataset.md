---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[42767]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a script to check for missing values in a dataset.

## Asistente
The following script can be used to check for missing values in a dataset: 

#import numpy library
import numpy as np

#read in the dataset
dataset = np.genfromtxt('dataset.csv', delimiter=',')

#check for any null values in the dataset
if np.isnan(dataset).any():
    print("Missing values found!")
else:
    print("No missing values found!")
