---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[6876]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a rock-paper-scissor game in python.

## Asistente
import random

options = ["rock", "paper", "scissors"]

player1 = input("Player1 choose: ")
player2 = random.choice(options)

if player1 == player2:
    print("It's a tie!")
elif player1 == "rock":
    if player2 == "paper":
        print("Player2 wins!")
    elif player2 == "scissors":
        print("Player1 wins!")
elif player1 == "paper":
    if player2 == "rock":
        print("Player1 wins!")
    elif player2 == "scissors":
        print("Player2 wins!")
elif player1 == "scissors":
    if player2 == "rock":
        print("Player2 wins!")
    elif player2 == "paper":
        print("Player1 wins!")
else:
    print("Invalid input. You have not entered rock, paper or scissors, try again.")
