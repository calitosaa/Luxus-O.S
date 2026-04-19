---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[42726]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Provide example code for the following data structure: stack.

Contexto/Input:
<none>

## Asistente
Here is an example of a stack data structure implemented in Python:

class Stack:
    def __init__(self):
        self.items = []
 
    def push(self, item):
        self.items.append(item)
 
    def pop(self):
        return self.items.pop()
 
    def is_empty(self):
        return self.items == []
