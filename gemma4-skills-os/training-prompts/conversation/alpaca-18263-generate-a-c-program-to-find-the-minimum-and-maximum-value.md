---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[18263]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a C++ program to find the minimum and maximum value of a given array

## Asistente
#include <iostream>
#include <algorithm>

int main() {
  int arr[] = {1, 2, 4, 8, 16};

  int n = sizeof(arr) / sizeof(arr[0]);
  int min = *std::min_element(arr, arr + n); 
  int max = *std::max_element(arr, arr + n); 

  std::cout << "Minimum: " << min << "\n";
  std::cout << "Maximum: " << max << "\n";

  return 0;
}
