---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28386]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Modify the given code to print out the largest number in the list.

Contexto/Input:
nums = [3, 4, 9, 5]

# Iterate over nums
for num in nums:
        # Check if num is even
        if num % 2 == 0:
                # Print out num
                print(num)

## Asistente
nums = [3, 4, 9, 5]

# Assign largest_num to -infinity
largest_num = -float('inf')

# Iterate over nums
for num in nums:
    # Check if num is larger than largest_num
    if num > largest_num:
        # Assign num to largest_num
        largest_num = num

# Print out largest_num
print(largest_num)
