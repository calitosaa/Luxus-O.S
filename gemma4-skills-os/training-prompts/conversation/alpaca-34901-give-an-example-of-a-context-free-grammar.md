---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[34901]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Give an example of a context-free grammar.

## Asistente
A simple example of a context-free grammar is the following: 

S → A B
A → C
B → D | E
C → F
D → G
E → G
F → a
G → b

This grammar has one start symbol (S), three non-terminal symbols (A, B and C) and two terminal symbols (a and b). It has two production rules: S → A B, and C → F. This grammar generates strings of symbols of the form a b b.
