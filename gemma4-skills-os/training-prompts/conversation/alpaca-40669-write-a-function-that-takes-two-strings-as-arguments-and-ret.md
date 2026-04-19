---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40669]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a function that takes two strings as arguments and returns true if they are anagrams of each other and false otherwise.

Contexto/Input:
string str1 = "anagram"; 
string str2 = "nagaram";

## Asistente
bool isAnagram(string str1, string str2) {
    if (str1.length() != str2.length()) 
        return false; 
    sort(str1.begin(), str1.end()); 
    sort(str2.begin(), str2.end()); 
  
    for (int i = 0; i < str1.length(); i++) 
        if (str1[i] != str2[i]) 
            return false; 
  
    return true; 
}
