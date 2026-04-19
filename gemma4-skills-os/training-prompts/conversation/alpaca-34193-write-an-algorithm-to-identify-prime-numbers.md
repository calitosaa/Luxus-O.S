---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[34193]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm to identify prime numbers.

## Asistente
def is_prime(n):
  if n <= 1:
    return False
  if n <= 3:  
    return True  
  if n % 2 == 0 or n % 3 == 0: 
    return False  
  i = 5
  while i*i <= n:
    if n % i == 0 or n % (i + 2) == 0: 
      return False
    i = i + 6
  return True
