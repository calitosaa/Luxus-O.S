---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[26348]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function to remove all the punctuation from a given sentence.

## Asistente
"""
Function to remove all punctuation from a given sentence
"""

def remove_punctuation(sentence): 
    punctuations = ',;:”!'
    for x in sentence: 
        if x in punctuations: 
            sentence = sentence.replace(x, "") 
    return sentence

if __name__ == "__main__": 
 
    print(remove_punctuation("I'm going to the store, see you there!")) # Output: Im going to the store see you there
