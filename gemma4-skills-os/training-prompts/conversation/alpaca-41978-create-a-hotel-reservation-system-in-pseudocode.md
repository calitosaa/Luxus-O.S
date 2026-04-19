---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[41978]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a hotel reservation system in pseudocode.

## Asistente
FUNCTION make_reservation
INPUT: customer info, check-in, check-out dates

IF hotel has available room 
  reserve customer a room 
  CONFIRM reservation 
ELSE 
  ALERT customer if no rooms are available 
END IF 

RETURN customer confirmation 
END FUNCTION
