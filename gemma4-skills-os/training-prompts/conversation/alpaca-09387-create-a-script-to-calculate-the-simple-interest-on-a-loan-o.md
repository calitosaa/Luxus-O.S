---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[9387]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a script to calculate the simple interest on a loan of $10000.

## Asistente
"""
Function to calculate the simple interest 

Input: amount - loan amount
       rate - interest rate
       years - number of years for the loan

"""

def simple_interest(amount, rate, years):
    return (amount * rate * years) / 100

if __name__ == '__main__':
    print(simple_interest(10000, 5, 4))
