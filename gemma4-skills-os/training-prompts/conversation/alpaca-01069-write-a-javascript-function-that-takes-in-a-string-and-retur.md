---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[1069]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a JavaScript function that takes in a string and returns an object with each character of the string as a key, and the number of times that character appears in the string as the value.

## Asistente
"""
Function to count character frequency in a string
"""

function countCharacterFrequency(string) {
    let freqObj = {};
    for (let c of string) {
        if (freqObj[c]) {
            freqObj[c]++;
        } else {
            freqObj[c] = 1;
        }
    }
    return freqObj;
}

if __name__ == '__main__':
    str = "hello world";
    console.log(countCharacterFrequency(str)); 
    // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
