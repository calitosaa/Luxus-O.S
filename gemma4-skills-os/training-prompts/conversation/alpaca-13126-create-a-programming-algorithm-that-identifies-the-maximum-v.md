---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[13126]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a programming algorithm that identifies the maximum value in a list of numbers.

Contexto/Input:
[2, 5, 8, 10, 20, 15]

## Asistente
// algorithm to find the maximum value in a list of numbers
max_val = 0;
for (i = 0; i < list.length; i++) {
  if(list[i] > max_val) {
    max_val = list[i];
  }
}

// return the maximum value
return max_val; 
// returns 20
