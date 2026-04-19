---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[42077]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program to generate the Fibonacci sequence.

## Asistente
"""
Generate the Fibonacci sequence
"""

# Initialize the first two elements in the Fibonacci sequence
prev = 0
curr = 1

# Print the first two elements
print(prev)
print(curr)

# Loop from 3 to n (where n is the number of elements in the Fibonacci sequence)
for n in range(3, 11): # Change the value of 11 to generate more/less elements
    # Calculate the sum of the previous two elements
    next = prev + curr
    
    # Print the sum
    print(next)
    
    # Update the values of prev and curr
    prev = curr
    curr = next

# Output:
# 0
# 1
# 1
# 2
# 3
# 5
# 8
# 13
# 21
# 34
# 55
