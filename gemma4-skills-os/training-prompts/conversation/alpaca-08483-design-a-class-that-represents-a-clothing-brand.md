---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[8483]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design a class that represents a clothing brand.

## Asistente
class ClothingBrand:
    def __init__(self, name, style, colors):
        self.name = name
        self.style = style
        self.colors = colors
    
    def get_name(self):
        return self.name
    
    def set_name(self, name):
        self.name = name
    
    def get_style(self):
        return self.style
    
    def set_style(self, style):
        self.style = style
    
    def get_colors(self):
        return self.colors
    
    def set_colors(self, colors):
        self.colors = colors
