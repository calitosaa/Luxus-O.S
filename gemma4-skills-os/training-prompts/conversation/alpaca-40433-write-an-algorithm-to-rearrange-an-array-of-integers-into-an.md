---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40433]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Write an algorithm to rearrange an array of integers into an array with all negative integers in the front.

Contexto/Input:
[3, -4, 2, -1, 7]

## Asistente
// Initialize two pointers to the start and end of the array 
int left = 0; 
int right = array.length - 1; 

// Loop through the array until left and right pointers cross 
while (left < right) { 

// Move left pointer until negative integer is found 
while (array[left] >= 0 && left < right) { 
    left++; 
} 

// Move right pointer until negative integer is found 
while (array[right] < 0 && left < right) { 
    right--; 
} 

// Swap positive and negative integers 
if (left < right) { 
    int temp = array[left]; 
    array[left] = array[right]; 
    array[right] = temp; 
} 

}
// Return rearranged array 
return array;
