---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[17122]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to search a given array for a particular number.

Contexto/Input:
array = [5, 10, 20, 25, 40]
target = 20

## Asistente
"""
This function searches an array for a particular number and returns an index if it is found. 

def search_array(arr, target): 
  for i in range(len(arr)): 
    if arr[i] == target: 
	  return i
 
  return -1
 
# Driver code 
array = [5, 10, 20, 25, 40] 
target = 20
index = search_array(array, target) 
 
if index != -1: 
  print("Element found at index", index) 
else: 
  print("Element not found") 
"""
