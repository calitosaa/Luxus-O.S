---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[26797]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to design a chessboard.

## Asistente
def design_chessboard(size):
    """
    This function creates a chessboard of the specified size
    """
    board = []
    # Create the board with alternating colors
    for i in range(size):
        row = []
        for j in range(size):
            if (i+j) % 2 == 0:
                row.append("BLK")
            else:
                row.append("WHT")
        board.append(row)
    return board
