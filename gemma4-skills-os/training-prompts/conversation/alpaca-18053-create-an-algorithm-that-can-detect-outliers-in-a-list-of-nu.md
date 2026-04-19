---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18053]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create an algorithm that can detect outliers in a list of numbers.

## Asistente
This algorithm should employ a statistical approach for detecting outliers in a list of numbers. First, it should calculate the mean and standard deviation of the dataset. Then, the algorithm should loop through each element in the list, calculating the difference between each element and the mean. If the difference is greater than two standard deviations away, then that element can be marked as an outlier. This algorithm should also be able to detect outliers which don't necessarily follow the normal distribution. In this case, the algorithm should calculate the Interquartile Range (IQR) instead of the standard deviation. The algorithm should then check if a value is above the upper whisker (Q3 + 1.5*IQR) or below the lower whisker (Q1 - 1.5*IQR). Any elements which are beyond this range will be marked as an outlier.
