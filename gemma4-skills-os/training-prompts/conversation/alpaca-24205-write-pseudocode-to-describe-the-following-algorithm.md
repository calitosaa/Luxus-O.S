---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[24205]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write pseudocode to describe the following algorithm:

Contexto/Input:
Given an array of integers "arr", the algorithm should return the index of the first element in "arr" greater than or equal to the given target "num".

## Asistente
function getIndex(arr, num) 
  idx := 0
  while (idx < arr.length && arr[idx] < num) 
    idx := idx + 1
  return idx
