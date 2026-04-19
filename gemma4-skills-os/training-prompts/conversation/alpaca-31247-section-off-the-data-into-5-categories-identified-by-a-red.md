---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[31247]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Section off the data into 5 categories identified by a 'red flag'

Contexto/Input:
This dataset contains information about 100 student loan applications. For each application, there are 4 variables: age, FICO score, monthly income, and loan amount.

## Asistente
The data can be sectioned off using a red flag criteria. Here are the 5 categories: 

Category 1: High-risk – Age below 21 years or FICO score below 600 or Monthly Income below $2000. 

Category 2: Medium-risk – Age 21–40 years, FICO score 600–665 and Monthly Income between $2000-$4999. 

Category 3: Low-risk – Age 41–55 years, FICO score 666–735 and Monthly Income between $5000-$7999.

Category 4: Very Low-risk – Age above 55 years and FICO score above 736. 

Category 5: Insufficient Data – FICO score and Monthly Income unavailable.
