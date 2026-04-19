---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40670]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Create a program that prints the following pattern:

## Asistente
#include<iostream> 
  
using namespace std; 
  
void pattern(int n) 
{ 
    int i, j; 
   
    // outer loop to handle number of rows 
    for (i = 0; i < n; i++) { 
  
        // inner loop to handle number of columns  
        for (j = 0; j <= i; j++) { 
            // printing stars 
            cout << "* "; 
        } 
  
        // ending line after each row 
        cout << endl; 
    } 
} 

// Driver function 
int main() 
{ 
    int n = 5; 
    pattern(n); 
    return 0; 
}
