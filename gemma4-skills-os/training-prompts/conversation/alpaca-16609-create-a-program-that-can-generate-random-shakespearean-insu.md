---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[16609]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program that can generate random Shakespearean insults.

## Asistente
//Function to generate random Shakespearean insults

FUNCTION generateInsult()

// Create an array of words to be selected 
words = ["artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered"];

// Generate two random numbers to select which words to use
i1 = RANDOM(words.length - 1);
i2 = RANDOM(words.length - 1);

RETURN "Thou art a " + words[i1] + " " + words[i2] + " rogue!";

END FUNCTION
