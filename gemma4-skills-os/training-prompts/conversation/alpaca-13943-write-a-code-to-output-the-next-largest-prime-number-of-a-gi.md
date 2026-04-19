---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[13943]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a code to output the next largest prime number of a given number

Contexto/Input:
num = 16

## Asistente
def nextLargestPrime(num):
    #Increment the number by one
    num += 1

    #Loop until largest prime number is found
    while not isPrime(num):
        num += 1

    #Return the largest prime found
    return num
