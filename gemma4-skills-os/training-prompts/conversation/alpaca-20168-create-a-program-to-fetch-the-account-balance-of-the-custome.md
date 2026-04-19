---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[20168]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program to fetch the account balance of the customer.

Contexto/Input:
Customer Name: John Smith

## Asistente
# Program to fetch the account balance of the customer

def fetch_account_balance(name):
    # Access customer data from database
    customer_data = get_data_from_db(name)

    # Get customer's account balance
    customer_balance = customer_data['account_balance']

    # Return customer's account balance
    return customer_balance

# Fetch the account balance of John Smith
john_smith_balance = fetch_account_balance('John Smith')
print(john_smith_balance)
