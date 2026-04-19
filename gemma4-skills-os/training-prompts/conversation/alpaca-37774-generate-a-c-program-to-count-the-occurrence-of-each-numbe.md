---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[37774]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Generate a c++ program to count the occurrence of each number in a list

## Asistente
#include <iostream> 
#include <algorithm>  
#include <map> 
using namespace std; 

// Returns frequency of every element in arr[] 
map<int, int> countFrequency(int arr[], int n) 
{ 
	map<int, int> freq; 
	for (int i=0; i<n; i++) 
		freq[arr[i]]++; 
	
	return freq; 
} 

int main() 
{ 
	int arr[] = {1, 3, 5, 4, 3, 5, 2}; 
	int n = sizeof(arr)/sizeof(arr[0]); 
	
	// Print frequency 
	map<int, int> freq = countFrequency(arr, n); 
	for (auto itr : freq) 
		cout << itr.first <<  " -> " << itr.second <<endl; 
	
	return 0; 
}
