---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[35632]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a JavaScript code that takes in a user's age and returns the current year plus their age

## Asistente
// declare current year 
const currentYear = 2020; 

// declare age 
let age = 20; 

// calculate year when user will be age + current year 
let fullAge = currentYear + age;

// print result 
console.log(fullAge); // Expect output: 2040
