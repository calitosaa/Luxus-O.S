---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[25658]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a valid C++ code for printing the first 10 numbers of the Fibonacci sequence

## Asistente
#include <iostream> 
  
int main() 
{ 
    int n1 = 0, n2 = 1, n3, i, number; 
  
    std::cout << "Enter the number of elements: "; 
    std::cin >> number; 
    std::cout << n1 << " " << n2 << " "; // printing 0 and 1 
  
    for (i = 2; i < number; ++i) // loop starts from 2 because 0 and 1 are already printed 
    { 
        n3 = n1 + n2; 
            std::cout << n3 << " "; 
            n1 = n2; 
            n2 = n3; 
    } 
    return 0; 
}
