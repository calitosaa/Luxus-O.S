---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[10768]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given a set of characters, write a function which checks whether the given set contains the character 'A'.

Contexto/Input:
Character Set: [W, X, Y, Z]

## Asistente
def checkCharacterSet(char_set):
  if 'A' in char_set:
    return True
  else:
    return False
