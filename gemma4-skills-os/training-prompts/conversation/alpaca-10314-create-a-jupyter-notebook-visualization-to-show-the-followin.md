---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[10314]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a Jupyter notebook Visualization to show the following information.

Contexto/Input:
The average temperatures of five cities in the US over the last 10 days.

## Asistente
import matplotlib.pyplot as plt
import numpy as np

cities = ['New York', 'Chicago', 'Los Angeles', 'Miami', 'Houston'] 
temperature = [54,43,70,88,76] 
days = np.arange(10)

plt.plot(days, temperature)

plt.xlabel('Days')
plt.ylabel('Temperature')
plt.title('Average Temperatures of Five Cities in the US Over the Last 10 Days') 
plt.xticks(days, cities)

plt.show()
