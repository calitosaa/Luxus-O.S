---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[40665]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a function that takes an array and its length as arguments, and returns the sum of the array's elements.

Contexto/Input:
int arr[] = {5.10, 2.21, 12.99, 9.1}; 
 int n = 4;

## Asistente
int sumArray(int arr[], int n) { 
    int sum = 0; 
    for (int i = 0; i < n; i++) 
        sum += arr[i]; 
    return sum; 
}
