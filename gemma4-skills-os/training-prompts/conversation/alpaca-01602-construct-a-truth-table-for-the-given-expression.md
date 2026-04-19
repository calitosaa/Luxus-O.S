---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[1602]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a truth table for the given expression.

Contexto/Input:
(~P -> Q) v (R -> S)

## Asistente
P    Q    R    S    (~P -> Q) v (R -> S)
  T    T    T    T          T
  T    T    F    F          F
  T    F    T    T          T
  T    F    F    F          F
  F    T    T    T          T
  F    T    F    F          F
  F    F    T    T          T
  F    F    F    T          T
