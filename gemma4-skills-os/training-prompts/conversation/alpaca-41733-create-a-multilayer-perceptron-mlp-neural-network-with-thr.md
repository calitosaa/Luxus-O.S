---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[41733]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a Multilayer Perceptron (MLP) Neural Network with three inputs and one output that can predict an output based on the input variables.

## Asistente
"""
Create a Multilayer Perceptron (MLP) Neural Network with three inputs and one output.
"""

import keras
from keras.models import Sequential
from keras.layers import Dense

# define the model
model = Sequential()
model.add(Dense(12, input_dim=3, activation='relu'))
model.add(Dense(1, activation='sigmoid'))

# compile the model
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

# summarize the model
model.summary()
