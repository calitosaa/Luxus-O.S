---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[25936]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a class to represent an airplane.

## Asistente
class Airplane: 
    def __init__(self, model, capacity, speed): 
        self.model = model 
        self.capacity = capacity 
        self.speed = speed 
        
    def increase_speed(self, increment): 
        self.speed += increment 
        
    def decrease_speed(self, decrement): 
        self.speed -= decrement
