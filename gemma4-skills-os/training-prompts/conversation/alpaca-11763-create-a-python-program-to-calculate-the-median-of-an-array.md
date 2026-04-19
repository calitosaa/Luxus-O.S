---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[11763]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a Python program to calculate the median of an array of numbers.

Contexto/Input:
5, 15, 20, 2, 10

## Asistente
def median_calc(nums): 
    nums.sort() 
    mid = len(nums)//2 
  
    if len(nums) % 2 == 0: 
        median = (nums[mid] + nums[mid - 1])/2 
    else: 
        median = nums[mid] 
  
    return median 
  
array = [5, 15, 20, 2, 10] 
n = len(array) 
  
med = median_calc(array) 
  
print("The median of given array is: " + str(med))
