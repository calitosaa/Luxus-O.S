---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[23583]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Using a given dataset, create a machine learning model for predicting a given outcome.

Contexto/Input:
Data set: temperature and heights of people in a given population
Outcome: BMI

## Asistente
"""
Create a machine learning model for predicting BMI (Body Mass Index) using temperature and heights of people in a given population
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Load the data
data = pd.read_csv('temperature_height_data.csv')

# Split into features (temperature and height) and label (BMI)
X = data.iloc[:, :2]
y = data.iloc[:, 2]

# Split into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

# Train the model
regressor = LinearRegression()
regressor.fit(X_train, y_train)

# Make predictions
y_pred = regressor.predict(X_test)

# Evaluate predictions
score = regressor.score(X_test, y_test)
print('R-squared score:', score)
