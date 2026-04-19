---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[17411]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write a C++ program to reverse the elements of an array.

## Asistente
#include <iostream>
using namespace std;

// Function to reverse the elements of an array 
void reverseArray(int arr[], int start, int end) 
{ 
    while (start < end) 
    { 
        int temp = arr[start];  
        arr[start] = arr[end]; 
        arr[end] = temp; 
        start++; 
        end--; 
    }  
} 
  
int main() 
{ 
    int arr[] = {1,2,3,4,5}; 
  
    // reverse the elements 
    reverseArray(arr, 0, 4); 
  
    // print the reversed array 
    for (int i=0; i<5; i++) 
        cout << arr[i] << " "; 
  
    return 0; 
}
