---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[27001]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a pythont program to find the highest common factor of two numbers.

## Asistente
def findHCF(a,b): 
      
    if(b == 0): 
        return a 
    else: 
        return findHCF(b, a%b) 
    
a = int (input("Enter first number : ")) 
b = int (input("Enter second number : ")) 

print("The H.C.F. is", findHCF(a, b))
