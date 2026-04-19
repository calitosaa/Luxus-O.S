---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[9199]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Suggest two ways to improve the given code.

Contexto/Input:
const a = 3;
const b = 5;
const c = a * b;

## Asistente
Two ways to improve the code are to add descriptive variable names to the constants and to use a Math function instead of multiplication:

const num_a = 3;
const num_b = 5;
const product = Math.multiply(num_a, num_b);
