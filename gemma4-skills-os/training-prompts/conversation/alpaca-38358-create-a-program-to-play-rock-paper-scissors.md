---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[38358]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program to play Rock, Paper, Scissors

## Asistente
"""
Create a program that plays Rock, Paper, Scissors
"""

import random

choices = ["rock","paper","scissors"]

# Ask user to choose one of the choices
user_choice = input("Please choose rock, paper, or scissors: ")

# Check that user choice is valid
while user_choice not in choices:
    user_choice = input("Please choose rock, paper, or scissors: ")

# Computer chooses one at random
computer_choice = random.choice(choices)

# Determine the winner
if user_choice == computer_choice:
    print("It's a tie!")
elif user_choice == "rock" and computer_choice == "scissors":
    print("You win!")
elif user_choice == "scissors" and computer_choice == "paper":
    print("You win!")
elif user_choice == "paper" and computer_choice == "rock":
    print("You win!")
else:
    print("Computer wins.")

# Print the result
print("You chose: "+user_choice+"\nComputer chose: "+computer_choice)
