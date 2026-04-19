---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[19845]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a code snippet in C++ that reverses a given string.

## Asistente
#include <iostream>
#include <string>

using namespace std; 

string reverseString(string s) 
{ 
    int n = s.length(); 
  
    // Swap character starting from two 
    // corners 
    for (int i = 0; i < n / 2; i++) 
        swap(s[i], s[n - i - 1]); 
  
    return s; 
} 
  
// Driver program 
int main() 
{ 
    string s = "hello"; 
    s = reverseString(s); 
    cout << "Reversed string is : "
         << s; 
    return 0; 
}
