---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[22980]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Design a conversation tree that leads to an actionable item by the end.

Contexto/Input:
A conversation tree that leads to planning a trip

## Asistente
Root: Hi! How can I help you? 
A: I was thinking about taking a trip. 
A1: Do you know where you want to go? 
A1a: Yes, I want to go to ____. 
A1a1: What date would you like to leave? 
A1a2: How long do you want to stay? 
A1b: No, I'm not sure yet. 
A1b1: What kind of trip did you have in mind? 
A1b2: What location do you think would make a good trip? 
A2: I need to make some plans. 
A2a: What kind of plans do you need to make? 
A2a1: What activities do you want to do? 
A2a2: Where do you want to stay? 
A2a3: What transportation do you need to arrange? 
Actionable Item: Once you have answered these questions, you can begin booking your trip.
