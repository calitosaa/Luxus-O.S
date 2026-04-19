---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[28328]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a C++ program to print a triangle of stars

## Asistente
#include <iostream> 
  
// Function to print a triangle 
void printTriangle(int n) 
{ 
    // outer loop to handle number of rows 
    // n in this case 
    for (int i=0; i<n; i++) 
    { 
        // inner loop to handle number spaces 
        //values changing acc. to requirement 
        for (int j=n-i; j>1; j--)  
        { 
            // printing spaces 
            std::cout <<" "; 
        }  
          
        //  inner loop to handle number of columns 
        //  values changing acc. to outer loop 
        for (int j=0; j<=i; j++ ) 
        { 
            // printing stars 
            std::cout <<"* "; 
        } 
          
        // ending line after each row 
        std::cout << std::endl; 
    } 
} 
  
// Driver Function 
int main() 
{ 
    int n = 5; 
    printTriangle(n); 
    return 0; 
}
