---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[2780]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given three numbers, find the greatest common divisor (gcd) of the three numbers.

## Asistente
"""
Given three numbers, find the greatest common divisor (gcd) of the three numbers
"""

# Find the greatest common divisor (GCD) of two numbers
def find_gcd(a, b): 
    while b > 0: 
        a, b = b, a % b 
  
    return a 

# Given three numbers, find the greatest common divisor (GCD) of the three numbers
def find_gcd_of_three_numbers(a, b, c): 
    gcd_a_b = find_gcd(a, b) 
    gcd_b_c = find_gcd(b, c) 
    gcd_a_c = find_gcd(a, c) 
  
    gcd = find_gcd(gcd_a_b, gcd_b_c) 
    gcd = find_gcd(gcd, gcd_a_c) 
  
    return gcd  

if __name__ == '__main__':
    print("GCD of 3 numbers is: ", end="") 
    print(find_gcd_of_three_numbers(18, 24, 30))
