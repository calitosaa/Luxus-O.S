---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[2839]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program to accept user input and determine if the input is a prime number

Contexto/Input:
No input

## Asistente
def check_prime(num): 
  
  # Check for negative or zero input 
  if num <= 0: 
    return False
  
  # Check for 1  
  if num == 1: 
    return False
  
  # Check if the number is divisible by any number between 2 and n-1  
  for i in range(2, num): 
    if num % i == 0: 
      return False
  
  # If there is no divisor, the number is prime  
  return True
