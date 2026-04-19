---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[6772]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Implement a given algorithm.

Contexto/Input:
Binary Search

## Asistente
function binary_search(arr, l, r, x) 
{ 
    if (￼r >= l) { 
        var mid = l + (r - l) / 2; 
  
        // If the element is present 
        // at the middle   
        if (arr[mid] == x)  
            return mid; 
  
        // If element is smaller 
        // than mid, then 
        // it can only be present 
        // in left sub array 
        if (arr[mid] > x)  
            return binary_search(arr, l, mid - 1, x); 
  
        // Else the element can 
        // only be present 
        // in right sub array 
        return binary_search(arr, mid + 1, r, x); 
    } 
  
    // We reach here when  
    // element is not present 
    // in array 
    return -1; 
}
