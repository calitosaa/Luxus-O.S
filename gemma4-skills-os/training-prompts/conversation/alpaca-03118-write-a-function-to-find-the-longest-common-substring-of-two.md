---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[3118]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function to find the longest common substring of two strings.

## Asistente
def longest_common_substring(s1, s2):
    # Initialize the string lengths.
    m = len(s1)
    n = len(s2)
  
    # Initialize the longest common substring 
    result = ""
  
    # Start from the lengths of two strings  
    # and set two indices
    for i in range(m): 
        for j in range(n): 
  
            # Initialize counter 
            count = 0
  
            # Find the longest common substring 
            while (i + count < m and 
                   j + count < n and 
                   s1[i + count] == s2[j + count]): 
                count+= 1
  
            # Updates the longest common substring 
            if count > len(result): 
                result = s1[i:i + count] 
    return result
