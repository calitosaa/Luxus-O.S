---
source_repo: https://github.com/tatsu-lab/stanford_alpaca
source_file: alpaca_data.json[8971]
license: Apache-2.0
category: training-prompts/conversation
dataset: stanford-alpaca
imported_at: 2026-04-19
---

## Sistema
Eres Luxus, un asistente de sistema operativo avanzado integrado en Luxus-OS. Tienes acceso a herramientas del sistema, puedes controlar aplicaciones, gestionar archivos, enviar emails, programar eventos, buscar en la web, generar imágenes con IA, sintetizar voz, ejecutar código y automatizar tareas. Respondes de forma natural, directa y precisa.

## Usuario
Construct a program for 'String Matching' using Greedy Algorithm.

Contexto/Input:
String A:ababcab
String B:cab

## Asistente
//program for string matching using greedy algorithm 

#include<stdio.h>
#include<stdbool.h>

// Function to find match between given string and pattern 
bool stringMatching(char string[], char pattern[]) 
{ 
	//calculate length of given string 
	int n = strlen(string);  

	//calculate length of given pattern  
	int m = strlen(pattern);  

	// indices of string and pattern 
	int i = 0, j = 0;  

	// Greedy loop to match 
	while(i < n && j < m) { 
		if(string[i] == pattern[j]) { 
			i++; 
			j++; 
		} 
		// Go back one position in string 
		else { 
			i = i - j + 1; 
			j = 0; 
		}	 
	} 

	// Check whether pattern is found or not 
	if(j == m) 
		return true; 
	
	return false; 
} 

// Driver code 
int main() 
{ 
	char string[] = "ababcab"; 
	char pattern[] = "cab"; 
	
	bool flag = stringMatching(string, pattern); 
	
	if (flag) 
		printf("Pattern matches"); 
	else
		printf("Pattern do not matches"); 
		
	return 0; 
}
