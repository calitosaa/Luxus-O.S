---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[34113]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Apply the changes requested in the comment for the following piece of code.

Contexto/Input:
def buy_book(bookID, shippingAddress, paymentMethod):
    """Purchase a book with given ID and ship it to the address provided"""
    # TODO: Reject payment if the payment method is "cash"
    # TODO: Calculate shipping cost using the shipping address
    print("Book purchased")

## Asistente
def buy_book(bookID, shippingAddress, paymentMethod):
    """Purchase a book with given ID and ship it to the address provided"""
    # Reject payment if the payment method is "cash"
    if paymentMethod == "cash":
      return "Payment not accepted"
    # Calculate shipping cost using the shipping address
    shippingCost = calculate_shipping_cost(shippingAddress)
    print("Book purchased")
