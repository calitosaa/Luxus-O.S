---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[37339]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given two strings, find and return the longest common substring.

Contexto/Input:
str1 = "abcdef"
str2 = "abcxyz"

## Asistente
# Program to find Longest Common Substring

def longest_common_substring(str1, str2):
  # calculate the length of both strings
  l1 = len(str1)
  l2 = len(str2)

  # initialise a matrix with all 0s
  matrix = [[0 for x in range(l2+1)] for x in range(l1+1)]

  # mark 1 for each common letter in both strings
  for i in range(l1):
    for j in range(l2):
      if str1[i] == str2[j]:
        matrix[i+1][j+1] = matrix[i][j] + 1
      else:
        matrix[i+1][j+1] = 0

  # get the maximum length of common substring 
  result = 0
  for i in range(l1+1):
    for j in range(l2+1):
      result = max(result, matrix[i][j])

  # return the result
  return result

# Driver program
str1 = "abcdef"
str2 = "abcxyz"
result = longest_common_substring(str1, str2)

print("The longest common substring is:", result) # Prints 3
