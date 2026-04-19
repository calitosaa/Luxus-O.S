---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[43495]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function that moves a character across a two-dimensional array on a game board

## Asistente
"""
Function to move a character across a two-dimensional array on a game board
"""

def move_character(game_board, x, y):
    # check if out of bounds 
    if (x < 0 or x >= len(game_board[0]) or 
        y < 0 or y >= len(game_board)):
        print("Out of bounds") 
        return 
    
    # update character 
    game_board[y][x] = 'C' 

    # print the updated game board 
    for row in game_board:
        print(" ".join(row))
