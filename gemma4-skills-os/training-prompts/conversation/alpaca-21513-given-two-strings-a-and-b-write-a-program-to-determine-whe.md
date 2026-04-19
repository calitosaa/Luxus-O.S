---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[21513]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Given two strings, A and B, write a program to determine whether the two strings are anagrams.

Contexto/Input:
String A: "rat"
String B: "tar"

## Asistente
def isAnagram(str1, str2): 
    # Getting length of both strings 
    n1 = len(str1) 
    n2 = len(str2) 
  
    # Sorting both strings to make sure they have same letters 
    str1 = sorted(str1) 
    str2 = sorted(str2) 
  
    # Comparing sorted strings 
    for i in range(0, n1): 
        if (str1[i] != str2[i]): 
            return False
  
    return True

# Driver function 
StringA = "rat"
StringB = "tar"

if isAnagram(StringA, StringB): 
    print("Yes")
else: 
    print("No")
