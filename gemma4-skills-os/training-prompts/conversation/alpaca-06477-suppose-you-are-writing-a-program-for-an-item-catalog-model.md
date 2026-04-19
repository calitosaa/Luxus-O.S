---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[6477]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Suppose you are writing a program for an item catalog. Model a
class for that purpose.

## Asistente
class ItemCatalog:
    def __init__(self, name, price, description, category, quantity):
        self.name = name
        self.price = price
        self.description = description
        self.category = category
        self.quantity = quantity
    
    def update_item(self, name, price, description):
        self.name = name
        self.price = price
        self.description = description
    
    def update_quantity(self, quantity):
        self.quantity = quantity
    
    def get_item_info(self):
        return (self.name, self.price, self.description, self.category, self.quantity)
