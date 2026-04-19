---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[31025]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function that takes a string of parentheses and determines its validity

## Asistente
function validateParens(str) {
  let parenthesesCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      parenthesesCounter++;
    } else if (str[i] === ')') {
      parenthesesCounter--;
    }

    if (parenthesesCounter < 0) {
      return false;
    }
  }
  return parenthesesCounter === 0;
}
