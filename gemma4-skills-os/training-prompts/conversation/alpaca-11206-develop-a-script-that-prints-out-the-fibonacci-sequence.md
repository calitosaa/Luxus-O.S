---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[11206]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Develop a script that prints out the Fibonacci sequence.

## Asistente
def fibonacci_sequence(n): 
    # set initial values 
    a = 0 
    b = 1  
    if n == 0: 
        return a 
    elif n == 1:
        return b 
    else: 
        # loop over the sequence 
        for i in range(2,n): 
            c = a + b 
            a = b 
            b = c 
        return b 
  
# Print the sequence 
for i in range(10): 
    print(fibonacci_sequence(i), end=" ") 

# Output: 0 1 1 2 3 5 8 13 21 34
