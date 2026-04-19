---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[31134]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Show how to debug a JavaScript error.

Contexto/Input:
Error: Cannot read property 'x' of undefined

## Asistente
1. First, identify the line that is causing the issue. Look through the code and check each line until you find the one with the problem. 
2. Once you’ve identified the line, see if 'x' is defined anywhere. If not, then you need to define 'x' before you can use it. 
3. If 'x' is defined somewhere else, check that it is being passed to this line correctly. Look at the variable and make sure its value is correct.
4. If 'x' is defined correctly, then look for any logic errors that may be causing the error. Check that your conditional statements are correct and that any operators are functioning properly. 
5. If you still can’t identify the issue, try adding console.log() statements to track what the code is doing at each step. This will help you identify where the issue is coming from.
