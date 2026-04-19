---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[153]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given two strings, check whether one string is a rotation of another?

Contexto/Input:
s1 = ‘waterbottle’
s2 = ‘erbottlewat’

## Asistente
def isRotation(s1, s2):
    if len(s1) != len(s2):
        return False

    s3 = s1 + s1 
    return s3.find(s2) != -1
