---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[35251]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a JavaScript program that returns the sum of the first n numbers.

## Asistente
"""
Write a JavaScript program that returns the sum of the first n numbers.
"""

function findSum(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

if (typeof module !== 'undefined') {
    module.exports = findSum;
}

console.log(findSum(10)); // 55
