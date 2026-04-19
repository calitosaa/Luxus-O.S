---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[2774]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a function to to check if a given number is an Armstrong number or not.

## Asistente
"""
Check if a given number is an Armstrong number or not
"""

def isArmstrongNumber(num): 
    # Calculate the length of num 
    n = len(str(num)) 
  
    # Initialize sum 
    sum = 0
  
    # Find a sum of nth power of    
    # individual digits
    temp = num 
    while temp > 0: 
        digit = temp % 10
        sum += digit ** n 
        temp //= 10
  
    # Return True if num is equal to the sum 
    # of nth power of its digits
    if num == sum: 
        return True
    else: 
        return False

if __name__ == '__main__':
    print(isArmstrongNumber(153))
