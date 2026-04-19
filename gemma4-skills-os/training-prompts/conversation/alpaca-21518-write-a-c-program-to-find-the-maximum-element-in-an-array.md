---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[21518]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a C++ program to find the maximum element in an array of numbers.

## Asistente
#include <iostream>
using namespace std; 
  
// Function to find maximum in arr[] of size n 
int findMax(int arr[], int n) 
{ 
    int max = arr[0]; // Initialize maximum 
  
    for (int i = 1; i < n; i++) 
        if (arr[i] > max) 
            max = arr[i]; 
  
    return max; 
} 
 
int main() 
{ 
    int arr[] = {3, 4, 5, 6, 7}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
 
    // Function calling 
    cout << "Maximum element in the array is " << findMax(arr, n); 
  
    return 0; 
}
