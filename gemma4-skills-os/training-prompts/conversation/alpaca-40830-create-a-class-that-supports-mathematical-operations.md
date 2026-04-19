---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40830]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a class that supports mathematical operations (+, -, *, /)

## Asistente
class MathOperator:
    def __init__(self,a,b):
        self.a = a
        self.b = b
        
    def add(self):
        return self.a + self.b
    
    def subt(self):
        return self.a - self.b
    
    def mult(self):
        return self.a * self.b
    
    def div(self):
        if self.b != 0:
            return self.a / self.b
        else:
            return "Cannot divide by zero!"
