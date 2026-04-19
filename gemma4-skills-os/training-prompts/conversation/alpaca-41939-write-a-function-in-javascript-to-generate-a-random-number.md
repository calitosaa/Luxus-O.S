---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[41939]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function in Javascript to generate a random number

## Asistente
function getRandomNumber() {
  return Math.floor(Math.random() * Math.pow(10, 10));
}
